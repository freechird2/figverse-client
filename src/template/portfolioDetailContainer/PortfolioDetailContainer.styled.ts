import { mediaQuery } from '@styles/mediaQuery'
import { mixin } from '@styles/mixin'
import theme from '@styles/theme'
import styled from 'styled-components'
const LinkWrapper = styled.div`
    aspect-ratio: 16/9;
    width: 100%;
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 50px;
`

const PageController = styled.div`
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: var(--page_controller);
    background-color: black;
    border-top: 1px solid ${theme.colors.layout_line};
    .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: inherit;
        width: var(--content_width);
        margin-inline: auto;
        button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: inherit;

            font-size: 1.3rem;
            color: ${theme.colors.gray4};
            width: 200px;
            cursor: pointer;
            &.list {
                width: 120px;
                justify-content: center;
            }
            &.arrow {
                width: 60px;
                &.prev {
                    svg {
                        transform: rotate(180deg);
                    }
                }
                &.next {
                    justify-content: flex-end;
                }
                &.disabled {
                    pointer-events: none;
                    opacity: 0;
                }
            }
            @media (hover: hover) {
                &:hover {
                    &.list {
                        color: ${theme.colors.secondary};
                    }
                    &.arrow {
                        color: ${theme.colors.primary};
                    }
                    svg path {
                        fill: ${theme.colors.primary};
                    }
                }
            }
        }
    }

    ${mediaQuery('tabletL')} {
        bottom: -45px;
        padding-inline: ${theme.size.inline_safe_area};
    }
`
const ImageWrapper = styled.div`
    img {
        width: 100%;
        padding-bottom: 10px;
    }
`

const ContentWrapper = styled.div`
    padding-bottom: 50px;

    .period {
        padding-bottom: 20px;
    }

    .title {
        padding-bottom: 30px;
        font-size: 2.4rem;
        line-height: 1.2;
    }

    .content {
        padding-bottom: 20px;
        line-height: 1.8;
        white-space: pre-line;
        word-break: break-all;
    }

    .etc {
        display: flex;
        flex-direction: column;
        gap: 10px;

        div {
            color: ${theme.colors.gray5};
        }
    }
`

const VideoWrapper = styled.div`
    aspect-ratio: 16/9;
    width: 100%;
    margin-bottom: 80px;
`

const Inner = styled.div`
    width: var(--content_width);
    margin-inline: auto;
`
const Content = styled.div`
    width: 100%;
    height: calc(100dvh - var(--page_controller));
    padding-block: 40px 60px;
    overflow: auto;
    ${mixin.scrollStyle}
    ${mediaQuery('tabletL')} {
        padding-inline: ${theme.size.inline_safe_area};
        height: ${`calc(100dvh - var(--page_controller) - ${theme.size.mobile_header_height})`};
    }
`

const Container = styled.div`
    --page_controller: 46px;
    --content_width: min(100%, 1000px);

    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100%;
`

export const S = {
    Container,
    Content,
    Inner,
    VideoWrapper,
    ContentWrapper,
    ImageWrapper,
    PageController,
    LinkWrapper,
    LinkContainer,
}
