import { ColorsTypes } from '@styles/styled'
import theme from '@styles/theme'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

type ColTyps = {
    $ellipsis: boolean
    $color: ColorsTypes
}
const _Col = styled.div<ColTyps>`
    display: flex;
    align-items: center;
    user-select: none;
    color: ${(p) => theme.colors[p.$color]};
    span {
        color: inherit;
    }
    ${(p) =>
        p.$ellipsis &&
        css`
            overflow: hidden;
        `}
`
const Row = styled(motion.div)<{ $colgroup: string }>`
    display: grid;
    grid-template-columns: ${(p) => p.$colgroup};
    width: 100%;
`
const Body = styled(motion.div)`
    --td__height: 40px;
    ${Row} {
        height: var(--td__height);
        cursor: pointer;

        @media (hover: hover) {
            &:hover {
                ${_Col} {
                    color: ${theme.colors.primary};
                }
            }
        }
    }
    ${_Col} {
        padding-inline: 10px;
        &.noPadding {
            padding-inline: 0;
        }
    }
`
const Head = styled.div`
    --th__height: 45px;
    ${Row} {
        height: var(--th__height);
    }
`
const Container = styled.div`
    --th__height: 45px;
    --td__height: 40px;
    height: 100%;
    /* width: 100%; */
`
export const PortfolioListComponent = {
    Container,
    Head,
    Body,
    Row,
    _Col,
}

interface ColProps {
    children?: React.ReactNode
    ellipsis?: boolean
    type?: 'th' | 'td'
    color?: ColorsTypes
    noPadding?: boolean
}
const Col = ({ children, ellipsis = false, type = 'td', color = 'gray1', noPadding = false }: ColProps) => {
    return (
        <PortfolioListComponent._Col
            $color={color}
            $ellipsis={ellipsis}
            className={noPadding ? 'noPadding' : ''}>
            {type === 'th' ? children : <span className={ellipsis ? 'ellipsis' : ''}>{children}</span>}
        </PortfolioListComponent._Col>
    )
}

export const Table = {
    Col,
    Container,
    Head,
    Body,
    Row,
}
