import PortfolioDeatil from './portfolioDetail'

interface PageParams {
    params: {
        id: string
    }
}

const page = async ({ params }: PageParams) => {
    const id = params.id

    return <PortfolioDeatil id={id} />
}

export default page
