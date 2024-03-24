import { KeywordListModel } from '@model/figkText'
import { atom } from 'recoil'

export const figkListState = atom<KeywordListModel[]>({
    key: 'figkListState',
    default: [],
})

export const figkKeywordState = atom<KeywordListModel>({
    key: 'figkKeywordState',
    default: undefined,
})
