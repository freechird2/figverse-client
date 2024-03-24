'use client'
import useMenuTabLink from '@hooks/useMenuTabLink'
import { GlobalNavComponent as S } from '@layout/globalNav/GlobalNav.styled'
import { MenuConvert } from '@shared/menu'
import { ROUTER_PATH } from '@shared/router'
import { globalNavState } from '@store/atom/globalNav'
import { menuTabState } from '@store/atom/menuTab'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import IconArrow from '../../../public/images/menu/menu_arrow.svg'
import IconFigk from '../../../public/images/menu/menu_figk.svg'
import IconHamburger from '../../../public/images/menu/menu_hamburger.svg'
import IconInstagram from '../../../public/images/menu/menu_instagram.svg'
import IconOpenSea from '../../../public/images/menu/menu_opensea.svg'
import IconYoutube from '../../../public/images/menu/menu_youtube.svg'

export const EXTERNAL_LINK = {
    YOUTUBE: 'https://www.youtube.com/@FIG-VERSE',
    INSTAGRAM: 'https://instagram.com/fig.0fficial?igshid=OGQ5ZDc2ODk2ZA==',
    FIGK: 'https://figk.net/',
    OPEN_SEA: 'https://opensea.io/collection/quantumz',
}

const MenuButton = ({ value }: { value: string }) => {
    const router = useRouter()
    const pathname = usePathname()
    const { addTab } = useMenuTabLink()
    const matchPath = () => {
        return pathname === value ? 'active' : ''
        // return value.includes(pathname) ? "active" : "";
    }

    const onClickMenu = () => {
        router.push(value)
        addTab(value)
    }
    return (
        <button
            type='button'
            onClick={onClickMenu}
            className={matchPath()}>
            <IconArrow /> {MenuConvert.toName(value)}
        </button>
    )
}
const GlobalNav = () => {
    const [navExpanded, setNavExpanded] = useRecoilState<boolean>(globalNavState)
    const [menuTab, setMenuTab] = useRecoilState<string[]>(menuTabState)

    return (
        <S.Container>
            <S.IconGroupBlock>
                <button
                    type='button'
                    onClick={() => setNavExpanded(!navExpanded)}>
                    <IconHamburger />
                </button>
                <Link
                    href={EXTERNAL_LINK.YOUTUBE}
                    target='_blank'>
                    <IconYoutube />
                </Link>
                <Link
                    href={EXTERNAL_LINK.INSTAGRAM}
                    target='_blank'>
                    <IconInstagram />
                </Link>
                <Link
                    href={EXTERNAL_LINK.FIGK}
                    target='_blank'>
                    <IconFigk />
                </Link>
                <Link
                    href={EXTERNAL_LINK.OPEN_SEA}
                    target='_blank'>
                    <IconOpenSea />
                </Link>
            </S.IconGroupBlock>
            {navExpanded && (
                <S.MenuGroupBlock>
                    <S.Logo>
                        <Image
                            fill
                            priority
                            src={'/images/svg/fig.svg'}
                            alt=''
                        />
                    </S.Logo>

                    <ul>
                        <li>
                            <MenuButton value={ROUTER_PATH.HOME} />
                        </li>
                        <li>
                            <MenuButton value={ROUTER_PATH.PORTFOLIO} />
                        </li>
                        <li>
                            <MenuButton value={ROUTER_PATH.CAREERS} />
                        </li>
                        <li>
                            <MenuButton value={ROUTER_PATH.CONTACT} />
                        </li>
                    </ul>
                    <div className='copyright'>
                        Copyright 2023. <br /> FIG all right reserved.
                    </div>
                </S.MenuGroupBlock>
            )}
        </S.Container>
    )
}

export default GlobalNav
