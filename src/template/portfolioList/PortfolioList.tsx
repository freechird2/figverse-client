'use client'
import API from '@api/index'
import InViewBar from '@components/inViewBar/InViewBar'
import PortfolioItem from '@components/portfolioItem/PortfolioItem'
import PortfolioListFilter, { SelectOptionType } from '@components/portfolioListFilter/PortfolioListFilter'
import PortfolioSearch from '@components/portfolioSearch/PortfolioSearch'
import PortfolioThumbnail from '@components/portfolioThumbnail/PortfolioThumbnail'
import RelvealText from '@components/revealText/RelvealText'
import { Table } from '@components/table/Table'
import { divisionArray } from '@function/divisionArray'
import { useDebounce } from '@hooks/useDebounce'
import useGetQuery from '@hooks/useTQuery'
import useWidth from '@hooks/useWidth'
import { GenericResponse } from '@model/common'
import { PortfolioDataModel, PortfolioFilterModel } from '@model/portfolio'
import { S3_BUCKET_RESIZE } from '@shared/constant'
import { convertFilterToUrl } from '@shared/function'
import { ROUTER_PATH } from '@shared/router'
import { portfolioFilter } from '@store/atom/filter'
import { variants } from '@styles/variants'
import { S } from '@template/portfolioList/PortfolioList.styled'
import { useInView } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'

const year = Number(new Date().getFullYear())
const yearArr: number[] = Array.from({ length: year - 2011 }, (d, i) => year - i)
const defaultYearOption = [
    {
        name: 'Year',
        value: '',
    },
    ...yearArr.map((y, i) => ({ name: y.toString(), value: y.toString() })),
]

interface Props {
    typicalList: PortfolioDataModel[]
    client: SelectOptionType[]
    category: SelectOptionType[]
}

const STAGGER_DURATION = 0.02
const LIMIT_ITEM = 30
const DELAY_TIME = STAGGER_DURATION * LIMIT_ITEM * 1000

const PortfolioList = ({ typicalList, category, client }: Props) => {
    const { media } = useWidth()
    const router = useRouter()
    const params = useSearchParams()
    const inViewRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(inViewRef)

    const [searchFlag, setSearchFlag] = useState<boolean>(false)
    const [src, setSrc] = useState<string>('')
    const [lodedSrc, setLoadedSrc] = useState<boolean>(false)
    const [listPerPage, setListPerPage] = useState<number>(1)

    const [filter, setFilter] = useRecoilState<PortfolioFilterModel>(portfolioFilter)

    const { data: portfolioList } = useGetQuery({
        queryKey: ['@getPortfolioList', filter],
        queryFn: ({ queryKey }) => API.portfolio.getPortfolioList(queryKey[1] as PortfolioFilterModel),
        select: (res: GenericResponse) => {
            return res.data.list as PortfolioDataModel[]
        },
        placeholderData: (p) => p,
        enabled: searchFlag,
    })

    const responsiveColGroup = () => {
        if (media.mobile) {
            return '100px 7px 1fr'
        }
        if (media.tabletS) {
            return '120px 7px 1fr'
        }
        if (media.tabletL) {
            return '120px 7px 1fr 23.4vw'
        }
        return '120px 7px 1fr 15.6vw 26vw'
    }

    const debounceWordChange = useCallback(
        useDebounce((key: string, value: string) => {
            setFilter((p) => ({ ...p, [key]: value }))
        }, 300),
        []
    )

    const onChangeFilter = (key: string, value: string) => {
        setFilter((p) => ({ ...p, [key]: value }))
    }

    const onMouseEnter = (thumbnailUrl: string) => {
        setSrc(`${S3_BUCKET_RESIZE}${thumbnailUrl}`)
        setLoadedSrc(false)
    }

    const onClickHandler = (id: number) => {
        router.push(`${ROUTER_PATH.PORTFOLIO}/${id}${convertFilterToUrl(filter)}`)
    }

    useEffect(() => {
        if (filter.word || filter.cId || filter.client || filter.year) setSearchFlag(true)
        else setSearchFlag(false)
    }, [filter])

    useEffect(() => {
        setSrc('')
        setListPerPage(1)
    }, [portfolioList, searchFlag])

    useEffect(() => {
        setFilter({
            word: params.get('word') || undefined,
            cId: params.get('cId') || undefined,
            year: params.get('year') || undefined,
            client: params.get('client') || undefined,
        })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (isInView) {
                setListPerPage((prev) => prev + 1)
            }
        }, DELAY_TIME)
    }, [isInView])

    return (
        <>
            {media.tabletL && (
                <S.Title className='color_primary'>
                    <RelvealText
                        value={{
                            color: 'color_primary',
                            text: String('Portfolio').split(''),
                        }}
                    />
                </S.Title>
            )}
            <S.StickyBlock>
                <div className='inner'>
                    <PortfolioSearch
                        name='word'
                        defaultValue={filter.word}
                        onChange={debounceWordChange}
                    />
                    <Table.Head>
                        <Table.Row $colgroup={responsiveColGroup()}>
                            <Table.Col type='th'>
                                <PortfolioListFilter
                                    placeholder='Year'
                                    options={defaultYearOption}
                                    defaultValue={filter.year}
                                    onChange={onChangeFilter}
                                    name='year'
                                />
                            </Table.Col>
                            {/* '*' empty th */}
                            <Table.Col type='th' />

                            <Table.Col type='th'>
                                <PortfolioListFilter
                                    placeholder='Project'
                                    readonly
                                    options={[]}
                                    name='project'
                                />
                            </Table.Col>
                            {!media.tabletS && (
                                <Table.Col type='th'>
                                    <PortfolioListFilter
                                        placeholder='Client'
                                        options={[{ value: '', name: 'all' }, ...client]}
                                        defaultValue={filter.client}
                                        onChange={onChangeFilter}
                                        name='client'
                                    />
                                </Table.Col>
                            )}
                            {!media.tabletL && (
                                <Table.Col type='th'>
                                    <PortfolioListFilter
                                        placeholder='Category'
                                        options={[{ value: '', name: 'all' }, ...category]}
                                        defaultValue={filter.cId}
                                        onChange={onChangeFilter}
                                        name='cId'
                                    />
                                </Table.Col>
                            )}
                        </Table.Row>
                    </Table.Head>
                </div>
            </S.StickyBlock>
            <S.ListBlock>
                <>
                    {/* <AnimatePresence> */}
                    {!searchFlag && (
                        <>
                            {typicalList &&
                                divisionArray(typicalList, LIMIT_ITEM)
                                    .slice(0, listPerPage)
                                    .map((arr, i) => {
                                        if (listPerPage >= i + 1)
                                            return (
                                                <Table.Body
                                                    key={i}
                                                    variants={variants.fadeInOut}
                                                    initial='initial'
                                                    animate='animate'
                                                    transition={{ staggerChildren: STAGGER_DURATION }}>
                                                    {arr.map((_) => {
                                                        return (
                                                            <PortfolioItem
                                                                key={_.id}
                                                                colGroup={responsiveColGroup()}
                                                                data={_}
                                                                onClick={() => onClickHandler(_.id)}
                                                                onMouseEnter={() => onMouseEnter(_.thumbnailUrl)}
                                                                onMouseLeave={() => setSrc('')}
                                                            />
                                                        )
                                                    })}
                                                </Table.Body>
                                            )
                                    })}
                        </>
                    )}
                    {searchFlag && (
                        <>
                            {portfolioList &&
                                divisionArray(portfolioList, LIMIT_ITEM).map((arr, i) => {
                                    return (
                                        <Table.Body
                                            key={i}
                                            variants={variants.fadeInOut}
                                            initial='initial'
                                            animate='animate'
                                            transition={{ staggerChildren: STAGGER_DURATION }}>
                                            {arr.map((_) => {
                                                return (
                                                    <PortfolioItem
                                                        key={_.id}
                                                        colGroup={responsiveColGroup()}
                                                        data={_}
                                                        onClick={() => onClickHandler(_.id)}
                                                        onMouseEnter={() => onMouseEnter(_.thumbnailUrl)}
                                                        onMouseLeave={() => setSrc('')}
                                                    />
                                                )
                                            })}
                                        </Table.Body>
                                    )
                                })}
                        </>
                    )}
                    {/* </AnimatePresence> */}
                    {divisionArray(typicalList, LIMIT_ITEM).length !== listPerPage && (
                        <InViewBar className={`${searchFlag ? 'h0' : ''}`}>
                            <div ref={inViewRef} />
                        </InViewBar>
                    )}
                </>
                {src !== '' && <PortfolioThumbnail src={src} />}
            </S.ListBlock>
        </>
    )
}

export default PortfolioList
