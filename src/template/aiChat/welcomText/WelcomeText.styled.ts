import theme from '@styles/theme'
import styled from 'styled-components'

const ConnectedCharacterText = styled.p`
    text-align: center;
    line-height: 1.56;
    font-size: 1.6rem;
    padding-bottom: 50px;
`

const Hr = styled.div`
    --paddingSize: 70px;
    position: relative;
    padding-block: var(--paddingSize);
    &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        transform: translate3d(0, -50%, 0);
        border-bottom: 1px dashed ${theme.colors.gray8};
    }
`

const ParagraphBlock = styled.div`
    p {
        font-size: 1.6rem;
        line-height: 1.56;
        white-space: pre-wrap;
        span {
            /* color: inherit; */
        }

        &.color_primary span {
            color: ${theme.colors.primary};
        }

        &.color_secondary span {
            color: ${theme.colors.secondary};
        }
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    h1 {
        font-size: 1.6rem;
        line-height: 1.56;
        white-space: pre-wrap;

        &.color_primary span {
            color: ${theme.colors.primary};
        }

        &.color_secondary span {
            color: ${theme.colors.secondary};
        }
    }
`
const Container = styled.div``
export const WelcomTextComponent = {
    Container,
    Content,
    Hr,
    ConnectedCharacterText,
    ParagraphBlock,
}
