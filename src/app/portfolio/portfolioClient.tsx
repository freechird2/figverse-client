'use client'
import { SelectOptionType } from '@components/portfolioListFilter/PortfolioListFilter'
import { PortfolioDataModel } from '@model/portfolio'
import { mediaQuery } from '@styles/mediaQuery'
import { mixin } from '@styles/mixin'
import theme from '@styles/theme'
import PortfolioList from '@template/portfolioList/PortfolioList'
import styled from 'styled-components'

const Container = styled.div`
    padding-block: 0 40px;
    height: 100%;
    overflow: auto;
    padding-inline: ${theme.size.inline_safe_area};
    scrollbar-gutter: stable;
    ${mixin.scrollStyle}
    ${mediaQuery('tabletL')} {
        overflow: revert;
    }
`
interface Props {
    typicalList: PortfolioDataModel[]
    client: SelectOptionType[]
    category: SelectOptionType[]
}

const PortfolioClient = ({ typicalList, client, category }: Props) => {
    return (
        <Container>
            <PortfolioList
                typicalList={typicalList || []}
                category={category || []}
                client={client || []}
            />
        </Container>
    )
}

export default PortfolioClient
