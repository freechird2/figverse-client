import API from '@api/index'
import PortfolioClient from '@app/portfolio/portfolioClient'

async function fetchPortfolio() {
    const data = await API.portfolio.getTypicalList()

    return data
}

async function fetchClient() {
    const data = await API.portfolio.getClient()

    return data
}

async function fetchCategory() {
    const data = await API.portfolio.getCategory()

    return data
}
const page = async () => {
    const data = await fetchPortfolio()
    const category = await fetchCategory()
    const client = await fetchClient()

    return (
        <PortfolioClient
            typicalList={data || []}
            category={category || []}
            client={client || []}
        />
    )
}

export default page
