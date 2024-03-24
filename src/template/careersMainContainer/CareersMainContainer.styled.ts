import { mediaQuery } from '@styles/mediaQuery'
import { mixin } from '@styles/mixin'
import theme from '@styles/theme'
import styled, { css } from 'styled-components'
const prefixStyle = css`
    display: flex;
    align-items: first baseline;
    gap: 8px;
    &:before {
        content: '•';
        display: block;
        color: inherit;
    }
`
const StaticTextBlock = styled.div`
    .title {
        font-size: 1.6rem;
        padding-bottom: 6px;
        white-space: pre-wrap;
    }
    .subject {
        padding-bottom: 40px;
        line-height: 2;
        white-space: pre-wrap;
    }
    .info {
        padding-bottom: 24px;
        font-size: 1.2rem;
    }
    .joinus {
        font-size: 1.2rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding-bottom: 24px;
        li {
            font-size: 1.2rem;
            line-height: 1.7;
            ${prefixStyle}
        }
    }
    ${mediaQuery('tabletL')} {
        ul {
            li {
                font-size: 1.3rem;
            }
        }
        .info {
            font-size: 1.3rem;
        }
        .joinus {
            font-size: 1.3rem;
        }
        .subject {
            line-height: 1.6;
        }
    }
`
const Content = styled.div`
    flex: 1;
    overflow: auto;
    padding: 40px;
    ${mixin.scrollStyle}
    h1 {
        font-size: 1.6rem;
        padding-bottom: 60px;
        white-space: pre-wrap;
    }
    ${mediaQuery('tabletL')} {
        padding-top: 20px;
        padding-inline: ${theme.size.inline_safe_area};
        h1 {
            padding-bottom: 50px;
        }
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
`
export const CareersMainContainerComponent = {
    Container,
    Content,
    StaticTextBlock,
}
