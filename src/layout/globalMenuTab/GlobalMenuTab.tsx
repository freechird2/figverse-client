'use client'
import useMenuTabLink from '@hooks/useMenuTabLink'
import { GlobalMenuTabComponent as S } from '@layout/globalMenuTab/GlobalMenuTab.styled'
import { MenuConvert } from '@shared/menu'
import { ROUTER_PATH } from '@shared/router'
import { menuTabState } from '@store/atom/menuTab'
import { usePathname, useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import IconDelete from '../../../public/images/menu/menu_tab_close.svg'

const GlobalMenuTab = () => {
    const router = useRouter()
    const { removeTab } = useMenuTabLink()

    const pathname = usePathname()
    const menuTab = useRecoilValue<string[]>(menuTabState)
    const TabRouter = (menu: string) => {
        if (menu === 'Home') {
            return ROUTER_PATH.HOME
        }
        return `/${menu.toLocaleLowerCase()}`
    }
    const currentRouter = (menu: string) => {
        return MenuConvert.toPath(menu) === MenuConvert.toOrignPath(pathname) ? 'active ' : ''
    }
    return (
        <S.Container>
            {menuTab.map((_, index) => {
                return (
                    <S.TabItem
                        key={index}
                        $itemLength={menuTab.length}
                        className={currentRouter(_)}>
                        <span
                            className='ellipsis'
                            onClick={() => router.push(TabRouter(_))}
                            role='button'>
                            {_}
                        </span>
                        {_ !== 'Home' && (
                            <button
                                type='button'
                                onClick={(e) => {
                                    removeTab(_)
                                }}>
                                <IconDelete />
                            </button>
                        )}
                    </S.TabItem>
                )
            })}
        </S.Container>
    )
}

export default GlobalMenuTab
