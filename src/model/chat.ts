import { CharacterType } from '@components/chatBubble/ChatBubble'
import { AiCharacterNameType } from '@shared/constant'

export interface ChatMessageModel {
    role: string
    content: string
}

export interface ChatRequestModel {
    target: AiCharacterNameType
    messages: ChatMessageModel[]
}

export interface ChatResponseModel {
    target: CharacterType
    response: string
}
