import { BASE_URL } from '@api/config'
import { CharacterType } from '@components/chatBubble/ChatBubble'
import { ChatRequestModel, ChatResponseModel } from '@model/chat'
import { ChatResponseState, chatState } from '@store/atom/chat'
import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'

const useChat = () => {
    const reader = useRef<ReadableStreamDefaultReader<Uint8Array> | undefined>(undefined)
    const [response, setResponse] = useState<ChatResponseModel>()
    const [state, setState] = useRecoilState(chatState)

    const sendMessage = async (messages: ChatRequestModel) => {
        setState(ChatResponseState.시작)

        reader.current?.cancel()
        reader.current = undefined

        let target: CharacterType = 'me'

        switch (messages.target) {
            case 'Designer':
                target = 'designer'
                break
            case 'Developer':
                target = 'developer'
                break
            case 'HR manager':
                target = 'hr_manager'
                break
            case 'PM':
                target = 'pm'
                break
        }

        if (target === 'me') return

        // Streaming, Multi turn 채팅
        const res = await fetch(`${BASE_URL}/chat/${target}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: messages.messages,
            }),
        })

        const data = res.body
        reader.current = data?.getReader()
        const decoder = new TextDecoder()

        let done = false
        let lastMessage = ''

        while (!done && reader.current) {
            const { value, done: doneReading } = await reader.current.read()
            done = doneReading
            const chunkValue = decoder.decode(value)

            lastMessage = lastMessage + chunkValue
            // console.log(chunkValue)
            setResponse({
                target: target,
                response: lastMessage,
            })
        }

        setState(ChatResponseState.종료)
    }

    return { sendMessage, response, state }
}

export default useChat
