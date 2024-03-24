import { ExpandableKeywordListComponent as S } from '@container/expandableKeywordList/ExpandableKeywordList.styled'
import useBottomSheet from '@hooks/useBottomSheet'
import { useOutsideClick } from '@hooks/useOutsideClick'
import { KeywordListModel } from '@model/figkText'
import { figkKeywordState, figkListState } from '@store/atom/figkText'
import FullPageFigkText from '@template/bottomSheet/fullPageFigkText/FullPageFigkText'
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
// export interface ExpandableKeywordListProps {
//     keywordConfig: KeywordListModel
// }

const ExpandableKeywordList = () => {
    const { BottomSheet } = useBottomSheet()
    const [selectKeyword, setSelectKeyword] = useRecoilState(figkKeywordState)
    const figkList = useRecoilValue(figkListState)
    const [keywordToggle, setKeywordToggle] = useState<boolean>(false)
    //외부클릭시 닫기 이벤트 함수
    const keywordContainerRef = useOutsideClick(() => setKeywordToggle(false))
    const reversedArray = figkList.length > 0 ? [...figkList].toReversed() : []
    const showFigkTextModal = (index: number, keywordArry: KeywordListModel[]) => {
        setSelectKeyword(reversedArray[index])

        BottomSheet({
            fullpage: true,
            children: <FullPageFigkText keywordArry={reversedArray} />,
        })
    }

    return (
        <>
            {figkList.length > 0 && (
                <S.Container
                    ref={keywordContainerRef}
                    className={keywordToggle ? 'expanded' : ''}>
                    <S.InnerSlideBlock className={keywordToggle ? 'expanded' : ''}>
                        {reversedArray.map((_, index) => {
                            return (
                                <button
                                    key={index}
                                    type='button'
                                    onClick={() => showFigkTextModal(index, reversedArray)}>
                                    {_.keyword}
                                </button>
                            )
                        })}
                    </S.InnerSlideBlock>
                </S.Container>
            )}
        </>
    )
}

export default ExpandableKeywordList
