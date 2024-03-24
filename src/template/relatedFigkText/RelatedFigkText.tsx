import FigkText from '@components/figkText/FigkText'
import KeywordNodata from '@components/keywordNodata/KeywordNodata'
import RelatedFigkTextKeyword from '@components/relatedFigkTextKeyword/RelatedFigkTextKeyword'
import useWidth from '@hooks/useWidth'
import { figkKeywordState, figkListState } from '@store/atom/figkText'
import { variants } from '@styles/variants'
import FallingFigs from '@template/fallingFigs/FallingFigs'
import { S } from '@template/relatedFigkText/RelatedFigkText.styled'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
const RelatedFigkText = () => {
    const { media } = useWidth()

    const [selectedFigk, setSeletedFigk] = useRecoilState(figkKeywordState)
    const figkList = useRecoilValue(figkListState)

    const onClickKeyword = (index: number) => {
        setSeletedFigk(figkList[index])
    }

    useEffect(() => {
        if (figkList.length > 0) {
            setSeletedFigk(figkList[figkList.length - 1])
        }
    }, [figkList])

    return (
        <>
            <AnimatePresence>
                <S.Container
                    variants={variants.fadeInOut}
                    initial='initial'
                    animate='animate'
                    exit='exit'>
                    {figkList.length < 1 && <KeywordNodata />}
                    {figkList.length > 0 && (
                        <>
                            <S.KeywordBlock>
                                <RelatedFigkTextKeyword
                                    selectedValue={selectedFigk?.keyword}
                                    onClickKeyword={onClickKeyword}
                                />
                            </S.KeywordBlock>
                            {selectedFigk && selectedFigk.figk && (
                                <motion.div
                                    variants={variants.fadeInOut}
                                    initial='initial'
                                    animate='animate'
                                    exit='exit'>
                                    <FigkText
                                        figk={{
                                            week: selectedFigk.figk.week,
                                            authorName: selectedFigk.figk.authorName,
                                            title: selectedFigk.figk.title,
                                            subTitle: selectedFigk.figk.subTitle,
                                            content: selectedFigk.figk.content,
                                        }}
                                        keyword={selectedFigk.keyword}
                                    />
                                </motion.div>
                            )}
                        </>
                    )}
                    {!media.tabletL && <FallingFigs />}
                </S.Container>
            </AnimatePresence>
        </>
    )
}

export default RelatedFigkText
