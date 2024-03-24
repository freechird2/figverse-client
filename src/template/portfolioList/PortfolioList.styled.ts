import { mediaQuery } from '@styles/mediaQuery'
import theme from '@styles/theme'
import styled from 'styled-components'
const StickyBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: sticky;
    top: 0;
    .inner {
        display: flex;
        flex-direction: column;
        gap: 14px;
        background-color: black;
        padding-top: 30px;
    }
    .title {
        font-size: 1.6rem;
    }

    ${mediaQuery('tabletL')} {
        /* position: static; */
        top: ${theme.size.mobile_header_height};
        margin-left: -10px;
        .title {
            padding-top: 30px;
        }
        .inner {
            padding-top: 0;
        }
    }
    ${mediaQuery('mobile')} {
        .title {
            padding-top: 16px;
        }
        .inner {
        }
    }
`
const ListBlock = styled.div`
    ${mediaQuery('tabletL')} {
        margin-left: -10px;
    }
`

const Title = styled.h1`
    padding-block: 16px;
`

const Thumbnail = styled.div`
    position: relative;
    aspect-ratio: 1/1;
    width: 33vw;
    background-color: red;
    position: fixed;
    top: 53%;
    right: 56px;
    transform: translate3d(0, -50%, 0);
    z-index: -1;
    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        &.resized {
            z-index: 1;
            /* left: -800px !important; */
        }
    }
`
export const S = {
    ListBlock,
    StickyBlock,
    Title,
    Thumbnail,
}
