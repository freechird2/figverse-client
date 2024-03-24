import { atom } from 'recoil'

export enum ChatResponseState {
    시작 = 'start',
    종료 = 'end',
}

export const chatState = atom<ChatResponseState>({
    key: `chatIsDone`,
    default: ChatResponseState.종료,
})
