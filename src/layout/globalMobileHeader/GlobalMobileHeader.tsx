import { GlobalMobileHeaderComponent as S } from '@layout/globalMobileHeader/GlobalMobileHeader.styled'
import { ROUTER_PATH } from '@shared/router'
import { globalNavState } from '@store/atom/globalNav'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import IconHamburger from '../../../public/images/menu/menu_hamburger2.svg'
import IconLogo from '../../../public/images/svg/fig2.svg'
const GlobalMobileHeader = () => {
    const setTriggerNav = useSetRecoilState<boolean>(globalNavState)
    const router = useRouter()
    return (
        <S.Container>
            <button
                type='button'
                onClick={() => setTriggerNav(!false)}>
                <IconHamburger />
            </button>
            <div
                className='logo'
                onClick={() => router.push(ROUTER_PATH.HOME)}>
                <IconLogo />
            </div>
        </S.Container>
    )
}

export default GlobalMobileHeader
