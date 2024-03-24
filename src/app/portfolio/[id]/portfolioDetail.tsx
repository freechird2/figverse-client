'use client'

import PortfolioDetailContainer from '@template/portfolioDetailContainer/PortfolioDetailContainer'

interface Props {
    id: string
}
const PortfolioDetail = ({ id }: Props) => {
    return <PortfolioDetailContainer id={id} />
}

export default PortfolioDetail
