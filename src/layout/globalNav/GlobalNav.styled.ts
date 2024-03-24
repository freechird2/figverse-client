'use client'
import { mediaQuery } from '@styles/mediaQuery'
import { mixin } from '@styles/mixin'
import theme from '@styles/theme'
import styled from 'styled-components'

const IconGroupBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: ${theme.size.nav_width};
    height: 100%;
    padding: 31px 12px;
    border-right: 1px solid ${theme.colors.layout_line};
    button,
    a {
        cursor: pointer;
    }
    a:hover svg path {
        fill: ${theme.colors.gray4};
    }
`
const MenuGroupBlock = styled.div`
    display: flex;
    flex-direction: column;
    /* flex: 1; */
    width: ${`calc(${theme.size.nav_expended_width} - ${theme.size.nav_width})`};
    height: 100%;
    padding: 34px 30px;
    background-color: ${theme.colors.layout_background};
    border-right: 1px solid ${theme.colors.layout_line};
    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
            user-select: none;
            button {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                cursor: pointer;
                &.active {
                    color: ${theme.colors.primary};
                    svg path {
                        fill: ${theme.colors.primary};
                    }
                }
            }
        }
    }
    .copyright {
        font-size: 1.2rem;
        line-height: 1.4;
        color: ${theme.colors.gray10};
        margin-top: auto;
    }

    ${mediaQuery('notebookM')} {
        position: absolute;
        left: ${theme.size.nav_width};
        top: 0;
        bottom: 0;
        width: ${`calc(${theme.size.nav_expended_width} - ${theme.size.nav_width})`};
        height: 100%;
        ${mixin.blurStyle}
        z-index: 100;
    }
`

const Logo = styled.div`
    position: relative;
    width: 37.84px;
    height: 14px;
    aspect-ratio: 37.84/14;
    margin-bottom: 50px;
    user-select: none;
    img {
        width: auto;
        height: auto;
    }
`

const Container = styled.nav`
    position: relative;
    display: flex;
    height: 100%;
`

export const GlobalNavComponent = {
    Container,
    IconGroupBlock,
    MenuGroupBlock,
    Logo,
}
