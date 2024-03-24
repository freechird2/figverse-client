import { MenuConvert, MenuData } from '@shared/menu'
import { menuTabState } from '@store/atom/menuTab'
import { usePathname, useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'

const useMenuTabLink = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [menuTab, setMenuTab] = useRecoilState<string[]>(menuTabState)
    let copyMenuTab: string[] = [...menuTab]
    function addTab(menu: string) {
        const menuIncludes = () => {
            return Object.keys(MenuData).includes(MenuConvert.toName(menu))
        }

        if (menuIncludes()) {
            copyMenuTab.push(MenuConvert.toName(MenuConvert.toOrignPath(menu)))

            const uniqueArray = copyMenuTab.filter((value, index, self) => self.indexOf(value) === index)
            setMenuTab(uniqueArray)
        } else {
            setMenuTab((prev) => prev)
        }
    }

    function removeTab(target: string) {
        //세션스토리지에 들어있는 메뉴탭의 배열가져옴
        const getMenuTabArray = menuTab.map((_) => {
            return MenuConvert.toPath(_)
        })

        const 현재페이지_인덱스 = getMenuTabArray.indexOf(MenuConvert.toOrignPath(pathname))
        const 타겟탭_페이지_인덱스 = copyMenuTab.indexOf(target)
        const 타겟탭_이전페이지_인덱스 = copyMenuTab.indexOf(target) - 1
        const 타겟탭_이전페이지_패스네임 = getMenuTabArray[타겟탭_이전페이지_인덱스]

        console.log({
            현재페이지_인덱스: 현재페이지_인덱스,
            타겟탭_페이지_인덱스: 타겟탭_페이지_인덱스,
            타겟탭_이전페이지_인덱스: 타겟탭_이전페이지_인덱스,
            타겟탭_이전페이지_패스네임: 타겟탭_이전페이지_패스네임,
        })

        const filtedMenuTab = copyMenuTab.filter((f) => f !== target)
        if (타겟탭_페이지_인덱스 === 현재페이지_인덱스) {
            router.push(타겟탭_이전페이지_패스네임)
            setMenuTab(filtedMenuTab)
        } else {
            setMenuTab(filtedMenuTab)
        }
    }
    return { addTab, removeTab }
}

export default useMenuTabLink
