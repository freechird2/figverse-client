'use client'
import { GlobalMobileNavComponent as S } from '@layout/globalMobileNav/GlobalMobileNav.styled'
import { EXTERNAL_LINK } from '@layout/globalNav/GlobalNav'
import { MenuConvert } from '@shared/menu'
import { ROUTER_PATH } from '@shared/router'
import { globalNavState } from '@store/atom/globalNav'
import { variants } from '@styles/variants'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useRecoilState, useSetRecoilState } from 'recoil'
import IconFigk from '../../../public/images/menu/menu_figk.svg'
import IconInstagram from '../../../public/images/menu/menu_instagram.svg'
import IconYoutube from '../../../public/images/menu/menu_youtube.svg'
import IconClose from '../../../public/images/svg/nav_close.svg'

const MenuButton = ({ value }: { value: string }) => {
    const router = useRouter()
    const pathname = usePathname()
    const setTriggerNav = useSetRecoilState<boolean>(globalNavState)
    const currentRouter = () => {
        return pathname === value ? 'active' : ''
    }

    const moveRouter = () => {
        setTriggerNav(false)
        setTimeout(() => {
            router.push(value)
        }, 200)
    }
    return (
        <S.MenuItem
            onClick={moveRouter}
            className={currentRouter()}>
            {MenuConvert.toName(value)}
        </S.MenuItem>
    )
}
const GlobalMobileNav = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [triggerNav, setTriggerNav] = useRecoilState<boolean>(globalNavState)
    const closeHandler = () => {
        setTriggerNav(false)
    }
    const currentRouter = (menu: string) => {
        return pathname === menu ? 'active' : ''
    }

    const moveRouter = (path: string) => {
        setTriggerNav(false)
        setTimeout(() => {
            router.push(path)
        }, 200)
    }
    return (
        <AnimatePresence>
            {triggerNav && (
                <S.Container>
                    <S.Dim
                        onClick={closeHandler}
                        variants={variants.fadeInOut}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    />
                    <S.Content
                        variants={variants.navToggle}
                        initial='initial'
                        animate='animate'
                        exit='exit'>
                        <S.CloseButton
                            type='button'
                            onClick={closeHandler}
                            variants={variants.fadeInOut}
                            initial='initial'
                            animate='animate'
                            exit='exit'>
                            <IconClose />
                        </S.CloseButton>
                        <S.MenuGroupBlock>
                            <MenuButton value={ROUTER_PATH.HOME} />
                            <MenuButton value={ROUTER_PATH.PORTFOLIO} />
                            <MenuButton value={ROUTER_PATH.CAREERS} />
                            <MenuButton value={ROUTER_PATH.CONTACT} />
                        </S.MenuGroupBlock>
                        <S.FooterBlock>
                            <div className='linkGroup'>
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
                            </div>
                            <div className='footer'>
                                Copyright 2023.
                                <br />
                                FIG all right reserved.
                            </div>
                        </S.FooterBlock>
                    </S.Content>
                </S.Container>
            )}
        </AnimatePresence>
    )
}

export default GlobalMobileNav
