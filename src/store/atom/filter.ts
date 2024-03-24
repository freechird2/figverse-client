import { PortfolioFilterModel } from '@model/portfolio'
import { atom } from 'recoil'

export const portfolioFilter = atom<PortfolioFilterModel>({
    key: 'portfolioFilter',
    default: {
        word: '',
        cId: '',
        client: '',
        year: '',
    },
})
