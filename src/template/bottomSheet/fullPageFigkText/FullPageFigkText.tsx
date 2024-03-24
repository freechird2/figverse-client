import FigkText from '@components/figkText/FigkText'
import FullPageHeader from '@components/fullPageComponents/FullPageHeader'
import { KeywordListModel } from '@model/figkText'
import { BottomSheetStateType, bottomSheetState } from '@store/atom/bottomSheet'
import { figkKeywordState } from '@store/atom/figkText'
import { FullPageFigkTextComponent as S } from '@template/bottomSheet/fullPageFigkText/FullPageFigkText.styled'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import IconMoreArrow from '../../../../public/images/svg/more_arrow.svg'

const FullPageFigkText = ({ keywordArry }: { keywordArry: KeywordListModel[] }) => {
    const targetRef = useRef<HTMLDivElement>(null)
    const [more, setMore] = useState<'limit' | 'expand' | 'default'>('default')
    const [selectKeyword, setSelectKeyword] = useRecoilState(figkKeywordState)
    const [overHeight, setOverHeight] = useState<boolean>(false)

    const onClickKeyword = (index: number) => {
        setSelectKeyword(keywordArry[index])
    }
    const bottomSheet = useRecoilValue<BottomSheetStateType>(bottomSheetState)

    useEffect(() => {
        setTimeout(() => {
            if (targetRef.current) {
                if (targetRef.current.offsetHeight > 100) {
                    setOverHeight(true)
                    setMore('limit')
                } else {
                    setOverHeight(false)
                }
            }
        }, 200)
    }, [bottomSheet])
    return (
        <S.Container>
            <FullPageHeader title='Chat Keywords' />
            <S.Content>
                <S.KeywordBlock className={more}>
                    <S.KeywordGroup ref={targetRef}>
                        {keywordArry.map((_, index) => {
                            return (
                                <Fragment key={index}>
                                    <button
                                        type='button'
                                        className={selectKeyword.keyword === _.keyword ? 'active' : ''}
                                        onClick={() => onClickKeyword(index)}>
                                        {_.keyword}
                                    </button>
                                </Fragment>
                            )
                        })}
                    </S.KeywordGroup>
                    {overHeight && (
                        <S.KeywordMoreButton
                            type='button'
                            className={more}
                            onClick={() => {
                                if (more === 'default' || more === 'limit') {
                                    setMore('expand')
                                }
                                if (more === 'expand') {
                                    setMore('limit')
                                }
                            }}>
                            more <IconMoreArrow />
                        </S.KeywordMoreButton>
                    )}
                </S.KeywordBlock>
                <S.FigkTextBlock>
                    <span className='currentKeyword'>{selectKeyword.keyword}</span>
                    {selectKeyword && selectKeyword.figk && (
                        <FigkText
                            figk={{
                                week: selectKeyword.figk.week,
                                authorName: selectKeyword.figk.authorName,
                                title: selectKeyword.figk.title,
                                subTitle: selectKeyword.figk.subTitle,
                                content: selectKeyword.figk.content,
                            }}
                            keyword={selectKeyword.keyword}
                        />
                    )}
                </S.FigkTextBlock>
            </S.Content>
        </S.Container>
    )
}

export default FullPageFigkText
