export interface FigkModel {
    id?: number
    title: string
    subTitle: string
    content: string
    authorName: string
    week: number
}

export interface KeywordListModel {
    keyword: string
    figk: FigkModel | null
}
