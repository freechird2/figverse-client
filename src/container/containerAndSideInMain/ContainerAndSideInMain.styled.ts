import { mediaQuery } from '@styles/mediaQuery'
import theme from '@styles/theme'
import styled from 'styled-components'
const Side = styled.div`
    height: 100%;
    width: ${theme.size.containerAndSideInMain_side};
`
const Container = styled.div`
    flex: 1;
    height: 100%;
    border-right: 1px solid ${theme.colors.layout_line};
    ${mediaQuery('tabletL')} {
        border-right: none;
    }
`
const Resize = styled.div`
    width: 10px;
    background-color: red;
    height: 100%;
    cursor: ew-resize;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
`
export const ContainerAndSideInMainComponent = {
    Container,
    Side,
    Wrapper,
    Resize,
}
