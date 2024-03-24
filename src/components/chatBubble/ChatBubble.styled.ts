import { mediaQuery } from '@styles/mediaQuery'
import theme from '@styles/theme'
import styled from 'styled-components'
import { AVATAR, CharacterType } from './ChatBubble'
const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: var(--avatarSize);
    height: var(--avatarSize);
    background-position: center;
    background-size: 12px 12px;
    border-radius: 50%;
    user-select: none;
    img {
        width: var(--avatarSize);
        height: var(--avatarSize);
    }
`
const Text = styled.div`
    color: ${theme.colors.gray9};
    line-height: 23px;
    font-size: 1.2rem;
    /* padding-top: 5px; */

    ${mediaQuery('tabletL')} {
        font-size: 1.3rem;
        padding-top: 1px;
    }
`

const Content = styled.div<{ $character: CharacterType }>`
    --avatarSize: 30px;
    display: flex;
    align-items: flex-start;
    gap: 24px;
    &:not(:first-of-type, :only-of-type) {
        padding-top: 50px;
    }
    ${Avatar} {
        background-color: ${(p) => AVATAR[p.$character].backgroundColor};
    }
    ${Text} {
        color: ${(p) => (p.$character === 'me' ? 'white' : theme.colors.gray6)};
    }

    ${mediaQuery('tabletL')} {
        --avatarSize: 24px;
        gap: 12px;
        &:not(:first-of-type, :only-of-type) {
            padding-top: 25px;
        }
    }
`
const Container = styled.div``
export const ChatBubbleComponent = {
    Container,
    Content,
    Text,
    Avatar,
}
