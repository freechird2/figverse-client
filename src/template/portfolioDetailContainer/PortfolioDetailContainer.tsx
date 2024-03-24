'use client'

import API from '@api/index'
import useGetQuery from '@hooks/useTQuery'
import { GenericResponse } from '@model/common'
import { PortfolioDetailModel, PortfolioFilterModel } from '@model/portfolio'
import { S3_BUCKET } from '@shared/constant'
import { convertFilterToUrl } from '@shared/function'
import { ROUTER_PATH } from '@shared/router'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import IconsArrow from '../../../public/images/svg/portfolio_detail_arrow.svg'
import { S } from './PortfolioDetailContainer.styled'
interface Props {
    id: string
}
const PortfolioDetailContainer = ({ id }: Props) => {
    const router = useRouter()
    const params = useSearchParams()
    const [ids, setIds] = useState<number[]>([])
    const [data, setData] = useState<PortfolioDetailModel>()
    const [pageIndex, setPageIndex] = useState<{ prevIndex: number | undefined; nextIndex: number | undefined }>()
    const [filter, setFilter] = useState<PortfolioFilterModel>({
        word: params.get('word') || undefined,
        cId: params.get('cId') || undefined,
        year: params.get('year') || undefined,
        client: params.get('client') || undefined,
    })

    const { data: portfolio } = useGetQuery({
        queryKey: ['@getPortfolioDetail', id],
        queryFn: ({ queryKey }) => API.portfolio.getPortfolioDetail(queryKey[1] as string, filter),
        select: (res: GenericResponse) => {
            return res.data
        },
        placeholderData: (p) => p,
        enabled: true,
    })

    const moveTo = (index: number | undefined) => {
        if (!ids || index === undefined) return
        router.push(`${ROUTER_PATH.PORTFOLIO}/${ids[index]}${convertFilterToUrl(filter)}`)
    }

    useEffect(() => {
        if (portfolio) {
            setData(portfolio.detail)
            setIds(portfolio.ids)

            if (portfolio.ids && portfolio.ids.length > 0) {
                const cur = portfolio.ids.indexOf(portfolio.detail.id)
                let prev = undefined
                let next = undefined
                if (cur > 0) {
                    prev = cur - 1
                }
                if (cur < ids.length - 1) {
                    next = cur + 1
                }
                setPageIndex({
                    prevIndex: prev,
                    nextIndex: next,
                })
            }
        }
    }, [portfolio])

    useEffect(() => {
        if (data && ids && ids.length > 0) {
            const cur = ids.indexOf(data.id)
            let prev = undefined
            let next = undefined
            if (cur > 0) {
                prev = cur - 1
            }
            if (cur < ids.length - 1) {
                next = cur + 1
            }
            setPageIndex({
                prevIndex: prev,
                nextIndex: next,
            })
        }
    }, [ids, data])

    useEffect(() => {
        if (!id || isNaN(Number(id))) {
            alert('잘못된 접근입니다.')
            router.push(ROUTER_PATH.PORTFOLIO)
        }
    }, [])

    if (!data) return <></>
    else
        return (
            <S.Container>
                <S.Content>
                    <S.Inner>
                        {data.link[0] && (
                            <S.VideoWrapper>
                                <iframe
                                    title='vimeo-player'
                                    src={data.link[0].includes('https://') ? data.link[0] : `https://${data.link[0]}`}
                                    width='100%'
                                    height='100%'
                                    frameBorder='0'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                    allowFullScreen></iframe>
                            </S.VideoWrapper>
                        )}
                        <S.ContentWrapper>
                            <div className='period color_me'>{`${data.year}.${data.month}`}</div>
                            <div className='title color_primary'>{data.title}</div>
                            <div className='content color_gray1'>{data.content}</div>
                            <div className='etc noSelect'>
                                <div>CLINET : {data.client}</div>
                                <div>CATEGORY : {data.category.join(', ')}</div>
                            </div>
                        </S.ContentWrapper>
                        {data.link.length > 1 && (
                            <S.LinkContainer>
                                {data.link
                                    .filter((l, i) => i > 0)
                                    .map((_, i) => {
                                        return (
                                            <S.LinkWrapper>
                                                <iframe
                                                    title='vimeo-player'
                                                    src={_.includes('https://') ? _ : `https://${_}`}
                                                    width='100%'
                                                    height='100%'
                                                    frameBorder='0'
                                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                                    allowFullScreen></iframe>
                                            </S.LinkWrapper>
                                        )
                                    })}
                            </S.LinkContainer>
                        )}
                        <S.ImageWrapper>
                            {data.thumbnail && data.thumbnail.url && (
                                <img
                                    src={`${S3_BUCKET}${data.thumbnail.url}`}
                                    alt={`thumb_1`}
                                />
                            )}
                            {data.images.map((img, i) => {
                                return (
                                    <img
                                        key={img.id}
                                        src={`${S3_BUCKET}${img.url}`}
                                        alt={`images${i}`}
                                    />
                                )
                            })}
                        </S.ImageWrapper>
                    </S.Inner>
                </S.Content>
                <S.PageController>
                    <div className='inner'>
                        <button
                            type='button'
                            className={`arrow prev ${pageIndex?.prevIndex !== undefined ? '' : 'disabled'}`}
                            onClick={() => moveTo(pageIndex?.prevIndex)}>
                            <IconsArrow />
                            PREV
                        </button>
                        <button
                            type='button'
                            className='list'
                            onClick={() => router.push(`${ROUTER_PATH.PORTFOLIO}${convertFilterToUrl(filter)}`)}>
                            LIST
                        </button>
                        <button
                            type='button'
                            className={`arrow next ${pageIndex?.nextIndex !== undefined ? '' : 'disabled'}`}
                            onClick={() => moveTo(pageIndex?.nextIndex)}>
                            NEXT
                            <IconsArrow />
                        </button>
                    </div>
                </S.PageController>
            </S.Container>
        )
}

export default PortfolioDetailContainer
