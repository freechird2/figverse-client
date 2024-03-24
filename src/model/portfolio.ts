export interface PortfolioDataModel {
    id: number
    isPublished: 'Y' | 'N' | 'W'
    title: string
    categories: string
    client: string
    adminName: string
    workPeriod: string
    registeredAt: string
    year: string
    month: string
    thumbnailUrl: string
    isTypical: 'Y' | 'N'
}

export interface PortfolioResponseModel {
    total: number
    list: PortfolioDataModel[]
}

export interface PortfolioFilterModel {
    word?: string
    client?: string
    cId?: string
    year?: string
}

export interface ImageDataModel {
    id: number
    url: string
}

export interface PortfolioResponseDetailModel {
    detail: PortfolioDetailModel
    ids: number[]
}

export interface PortfolioDetailModel {
    id: number
    isOld: 'Y' | 'N'
    clientId: number
    client: string
    title: string
    content: string
    year: string
    month: string
    isPublished: 'Y' | 'N'
    registeredAt: string
    category: string[]
    tag: string[]
    images: ImageDataModel[]
    link: string[]
    thumbnail: ImageDataModel
}
