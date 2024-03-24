import theme from '@styles/theme'
import styled from 'styled-components'

const TabItem = styled.div<{ $itemLength: number }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(p) => `calc(100% / ${p.$itemLength})`};
    border-right: 1px solid ${theme.colors.layout_line};
    height: 100%;

    max-width: 200px;
    user-select: none;
    span {
        display: inline-flex;
        align-items: center;
        flex: 1;
        font-size: 1.3rem;
        height: 100%;
        padding-left: 12px;
        cursor: pointer;
    }
    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: ${theme.size.menu_tab_height};
        height: ${theme.size.menu_tab_height};
        padding-inline: 12px;
        cursor: pointer;
    }
    &.active {
        span {
            color: #000;

            font-weight: 700;
        }
        background-color: ${theme.colors.primary};
    }
`

const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
    border-bottom: 1px solid ${theme.colors.layout_line};
`
export const GlobalMenuTabComponent = {
    TabItem,
    Container,
}
