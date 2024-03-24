'use client'
import API from '@api/index'
import ChatBubble, { CharacterType } from '@components/chatBubble/ChatBubble'
import ChatChangeCharacterOption from '@components/chatChangeCharacterOption/ChatChangeCharacterOption'
import ChatInput from '@components/chatInput/ChatInput'
import AiChatController from '@container/aiChatController/AiChatController'
import useChat from '@hooks/useChat'
import useGetQuery from '@hooks/useTQuery'
import useWidth from '@hooks/useWidth'
import { ChatMessageModel, ChatRequestModel, ChatResponseModel } from '@model/chat'
import { GenericResponse } from '@model/common'
import { AiCharacterNameType } from '@shared/constant'
import { aiCharacterState } from '@store/atom/aiCharacter'
import { ChatResponseState } from '@store/atom/chat'
import { figkListState } from '@store/atom/figkText'
import { mediaQuery } from '@styles/mediaQuery'
import { mixin } from '@styles/mixin'
import theme from '@styles/theme'
import { encodingForModel } from 'js-tiktoken'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'
import WelcomeText from './welcomText/WelcomeText'

const Content = styled.div`
    flex: 1;
    overflow: auto;
    padding: 40px;
    ${mixin.scrollStyle}
    ${mediaQuery('tabletL')} {
        padding-inline: ${theme.size.inline_safe_area};
        max-height: ${`calc(100dvh - ${theme.size.mobile_header_height} -  var(--bottom_keyword_height))`};
    }

    ${mediaQuery('mobile')} {
        ${mixin.hiddenScorllStyle}
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
`
const AiChat = () => {
    const { media, width } = useWidth()
    const { sendMessage, response, state } = useChat()
    const [chat, setChat] = useState<string>('')
    const [messages, setMessages] = useState<ChatMessageModel[]>([])
    const [chatList, setChatList] = useState<ChatResponseModel[]>([])
    const [sentence, setSentence] = useState<string>('')

    const character = useRecoilValue<AiCharacterNameType>(aiCharacterState)
    const [keywordList, setKeywordList] = useRecoilState(figkListState)

    const curMessageRef = useRef<ChatResponseModel[]>([])
    const contentRef = useRef<HTMLDivElement>(null)

    const enc = useMemo(() => {
        return encodingForModel('gpt-3.5-turbo-1106')
    }, [])

    const { data: figkData } = useGetQuery({
        queryKey: ['@getKeyword', sentence],
        queryFn: ({ queryKey }) => API.chat.getKeyword(queryKey[1]),
        select: (res: GenericResponse) => {
            return res.data || ''
        },
        enabled: !!sentence,
    })

    const onSendMessage = () => {
        if (state !== ChatResponseState.종료 || !chat || !character) return

        let aiTarget: CharacterType = 'me'

        switch (character) {
            case 'Designer':
                aiTarget = 'designer'
                break
            case 'Developer':
                aiTarget = 'developer'
                break
            case 'HR manager':
                aiTarget = 'hr_manager'
                break
            case 'PM':
                aiTarget = 'pm'
                break
        }

        const newMessage: ChatMessageModel = {
            role: 'user',
            content: chat,
        }

        const reqestModel: ChatRequestModel = {
            target: character,
            messages: [...messages, newMessage],
        }

        setMessages([...messages, newMessage])
        setChatList((p) => [...p, { target: 'me', response: chat }, { target: aiTarget, response: 'loading...' }])
        setSentence(chat)
        setChat('')

        sendMessage(reqestModel)

        scrollToBottom()
    }

    const scrollToBottom = useCallback(() => {
        // 스크롤 내리기
        let newScroll: number = 0
        if (contentRef.current) {
            newScroll = contentRef.current.scrollHeight
        }
        setTimeout(() => {
            if (contentRef.current) {
                contentRef.current.scrollTo({
                    behavior: 'smooth',
                    top: newScroll,
                    left: 0,
                })
            }
        }, 300)
    }, [response])

    useEffect(() => {
        if (!response || !response.response || !response.target) return

        setChatList([...curMessageRef.current.slice(0, curMessageRef.current.length - 1), response])
        // debounceScroll();
        scrollToBottom()
    }, [response])

    useEffect(() => {
        if (state === ChatResponseState.시작) curMessageRef.current = chatList
        else if (state === ChatResponseState.종료 && chatList.length > 0) {
            setTimeout(() => {
                setMessages((p) => [...p, { role: 'assistant', content: chatList[chatList.length - 1].response }])
            }, 500)
        }

        if (state === ChatResponseState.종료) scrollToBottom()
        // scrollToBottom();
    }, [state])

    useEffect(() => {
        setMessages([])
        setChatList([])
    }, [character])

    useEffect(() => {
        if (messages.length > 0) {
            if (enc.encode(JSON.stringify(messages)).length > 1000) setMessages((p) => p.slice(1))
        }
    }, [messages])

    useEffect(() => {
        if (figkData && keywordList.findIndex((f) => f.keyword === figkData.keyword) === -1) {
            setKeywordList([...keywordList, figkData])
        }
    }, [figkData])

    return (
        <Container>
            <Content ref={contentRef}>
                {character === '' && <WelcomeText />}

                <ChatBubble chatList={chatList} />
            </Content>
            <AiChatController>
                {/* Change Character 옵션 리스트 */}
                <ChatChangeCharacterOption />
                {/* Input 입력블록 */}
                <ChatInput
                    value={chat}
                    onChange={(e) => setChat(e.target.value)}
                    onSendMessage={onSendMessage}
                />
            </AiChatController>
        </Container>
    )
}

export default AiChat
