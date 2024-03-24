'use client'
import useMenuTabLink from '@hooks/useMenuTabLink'
import useWidth from '@hooks/useWidth'
import BottomSheet from '@layout/bottomSheet/BottomSheet'
import GlobalMenuTab from '@layout/globalMenuTab/GlobalMenuTab'
import { GlobalMenuTabComponent } from '@layout/globalMenuTab/GlobalMenuTab.styled'
import GlobalMobileHeader from '@layout/globalMobileHeader/GlobalMobileHeader'
import GlobalMobileNav from '@layout/globalMobileNav/GlobalMobileNav'
import GlobalNav from '@layout/globalNav/GlobalNav'
import { GlobalNavComponent } from '@layout/globalNav/GlobalNav.styled'
import { globalNavState } from '@store/atom/globalNav'
import { mediaQuery } from '@styles/mediaQuery'
import theme from '@styles/theme'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
const GlobalMain = styled.main`
    height: ${`calc(100dvh - ${theme.size.menu_tab_height})`};
    ${mediaQuery('tabletL')} {
        height: 100%;
        /* height: ${`calc(100dvh - ${theme.size.mobile_header_height})`}; */
    }
`
const Container = styled.div<{ $isExpended: boolean }>`
    display: grid;
    grid-template-columns: ${(p) => `${p.$isExpended ? theme.size.nav_expended_width : theme.size.nav_width} 1fr`};
    grid-template-rows: ${theme.size.menu_tab_height} 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    ${mediaQuery('notebookM')} {
        grid-template-columns: ${`${theme.size.nav_width} 1fr`};
    }

    ${GlobalNavComponent.Container} {
        grid-area: 1 / 1 / 3 / 2;
    }
    ${GlobalMenuTabComponent.Container} {
        grid-area: 1 / 2 / 2 / 3;
    }
    ${GlobalMain} {
        grid-area: 2 / 2 / 3 / 3;
    }

    ${mediaQuery('tabletL')} {
        display: block;
    }
`
const GlobalContainer = ({ children }: { children: React.ReactNode }) => {
    const { media } = useWidth()
    const pathname = usePathname()
    const { addTab } = useMenuTabLink()
    const [navExpanded, setNavExpanded] = useRecoilState<boolean>(globalNavState)
    useEffect(() => {
        //테블릿부터 네비 상태 닫혀짐이 디폴트
        if (media.tabletL) {
            setNavExpanded(false)
        }
        addTab(pathname)
    }, [])

    return (
        <>
            <BottomSheet />
            <Container
                id='globalContainer'
                $isExpended={navExpanded}>
                {media.tabletL ? (
                    <>
                        <GlobalMobileHeader />
                        <GlobalMobileNav />
                    </>
                ) : (
                    <>
                        <GlobalNav />
                        <GlobalMenuTab />
                    </>
                )}
                <GlobalMain>{children}</GlobalMain>
            </Container>
        </>
    )
}

export default GlobalContainer
