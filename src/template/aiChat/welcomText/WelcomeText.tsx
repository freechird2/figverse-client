import DefaultChoiceCharacter from '@components/defaultChoiceCharacter/DefaultChoiceCharacter'
import RelvealText from '@components/revealText/RelvealText'
import useWidth from '@hooks/useWidth'
import { AiCharacterData, AiCharacterNameType } from '@shared/constant'
import { RevealTextData } from '@shared/revealTextData'
import { aiCharacterState } from '@store/atom/aiCharacter'
import { variants } from '@styles/variants'
import { WelcomTextComponent as S } from '@template/aiChat/welcomText/WelcomeText.styled'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

const WelcomeText = () => {
    const { width, media } = useWidth()
    const [end, setEnd] = useState<boolean>(false)
    const character = useRecoilValue<AiCharacterNameType>(aiCharacterState)

    useEffect(() => {
        setTimeout(() => {
            setEnd(true)
        }, 3000)
    }, [])
    return (
        <S.Container>
            <S.Content>
                {width > 480 && (
                    <>
                        <h1 className='color_primary'>
                            <RelvealText value={RevealTextData.home.title} />
                        </h1>
                        <S.ParagraphBlock>
                            {RevealTextData.home.paragraph[0].map((_, index) => {
                                return (
                                    <p
                                        key={index}
                                        className='color_secondary'>
                                        <RelvealText value={_} />
                                    </p>
                                )
                            })}
                        </S.ParagraphBlock>
                        <S.ParagraphBlock>
                            {RevealTextData.home.paragraph[1].map((_, index) => {
                                return (
                                    <p
                                        key={index}
                                        className='color_primary'>
                                        <RelvealText value={_} />
                                    </p>
                                )
                            })}
                        </S.ParagraphBlock>
                        <S.ParagraphBlock>
                            {RevealTextData.home.paragraph[2].map((_, index) => {
                                return (
                                    <p
                                        key={index}
                                        className='color_primary'>
                                        <RelvealText value={_} />
                                    </p>
                                )
                            })}
                        </S.ParagraphBlock>
                    </>
                )}
                {width <= 480 && width >= 375 && (
                    <>
                        <h1 className='color_primary'>
                            <RelvealText value={RevealTextData.home.title} />
                        </h1>
                        <S.ParagraphBlock>
                            {RevealTextData.home.paragraph[3].map((_, index) => {
                                return (
                                    <p
                                        key={index}
                                        className='color_secondary'>
                                        <RelvealText value={_} />
                                    </p>
                                )
                            })}
                        </S.ParagraphBlock>
                        <S.ParagraphBlock>
                            {RevealTextData.home.paragraph[4].map((_, index) => {
                                return (
                                    <p
                                        key={index}
                                        className='color_primary'>
                                        <RelvealText value={_} />
                                    </p>
                                )
                            })}
                        </S.ParagraphBlock>
                        <S.ParagraphBlock>
                            {RevealTextData.home.paragraph[2].map((_, index) => {
                                return (
                                    <p
                                        key={index}
                                        className='color_primary'>
                                        <RelvealText value={_} />
                                    </p>
                                )
                            })}
                        </S.ParagraphBlock>
                    </>
                )}
                {width < 375 && (
                    <>
                        <h1 className='color_primary'>Welcome to FIG VERSE, everyone!</h1>
                        <S.ParagraphBlock>
                            <p className='color_secondary'>
                                Fig is an independent creative agency based in Seoul. We provide creative contents like insightful
                                campaigns, cutting-edge events, inspiring creatives, strategic ideas, and much more for some of the world’s
                                best-loved brands. We are well-versed in creating superb contents that can be on the visionary’s lips. Our
                                mission is connecting cutting-edge culture with forward-looking brands. We want to culturally superb
                                influence.
                            </p>
                        </S.ParagraphBlock>
                        <S.ParagraphBlock>
                            <p className='color_primary'>
                                FIG VERSE is a website based on chat GPT. If you have any questions for us, please feel free to ask us
                                anything. I'll give you an honest answer!
                            </p>
                        </S.ParagraphBlock>
                        <S.ParagraphBlock>
                            <p className='color_primary'>Ps. Date counseling is also available!</p>
                        </S.ParagraphBlock>
                    </>
                )}
            </S.Content>
            <AnimatePresence>
                {end && (
                    <motion.div
                        variants={variants.fadeInOut}
                        initial='initial'
                        animate='animate'
                        exit='exit'>
                        <S.Hr />
                        {character === '' && <DefaultChoiceCharacter />}
                        {character !== '' && (
                            <S.ConnectedCharacterText className={`color_${AiCharacterData.find((f) => f.name === character)!.value}`}>
                                You are now connected to a {character}.
                            </S.ConnectedCharacterText>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </S.Container>
    )
}

export default WelcomeText
