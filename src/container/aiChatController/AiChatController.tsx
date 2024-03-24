import { AiChatControllerComponent as S } from '@container/aiChatController/AiChatController.styled'
import useWidth from '@hooks/useWidth'
import React from 'react'

import ExpandableKeywordList from '@container/expandableKeywordList/ExpandableKeywordList'
interface Props {
    children: React.ReactNode
}
const AiChatController = ({ children }: Props) => {
    const { media } = useWidth()
    return (
        <S.Container>
            <S.Content>
                {media.tabletL && <ExpandableKeywordList />}

                <S.Inner>{children}</S.Inner>
            </S.Content>
            {!media.tabletL && (
                <S.Footer>OpenAI. (2023). ChatGPT (2023 gpt-4-1106-preview) [Large language model]. https://chat.openai.com</S.Footer>
            )}
        </S.Container>
    )
}

export default AiChatController
