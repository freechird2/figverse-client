import RelvealText from '@components/revealText/RelvealText'
import useWidth from '@hooks/useWidth'
import { RevealTextData } from '@shared/revealTextData'
import { ContactMainContainerComponent as S } from '@template/contactMainContainer/ContactMainContainer.styled'
import ContactSideContainer from '@template/contactSideContainer/ContactSideContainer'
import { DepartmentData } from './departmentData'

const ContactMainContainer = () => {
    const { media, width } = useWidth()
    return (
        <S.Container>
            <S.Content>
                <S.IntroTextBlock>
                    <h1 className='color_primary'>
                        <RelvealText value={RevealTextData.contact.title} />
                    </h1>

                    {width > 1400 && (
                        <>
                            <p className='color_primary'>
                                <RelvealText value={RevealTextData.contact.paragraph[0][0]} />
                            </p>
                            <p className='color_primary'>
                                <RelvealText value={RevealTextData.contact.paragraph[0][1]} />
                            </p>
                        </>
                    )}
                    {width > 1280 && width <= 1400 && (
                        <>
                            <p className='color_primary'>
                                <RelvealText value={RevealTextData.contact.paragraph[1][0]} />
                            </p>
                            <p className='color_primary'>
                                <RelvealText value={RevealTextData.contact.paragraph[1][1]} />
                            </p>
                            <p className='color_primary'>
                                <RelvealText value={RevealTextData.contact.paragraph[1][2]} />
                            </p>
                        </>
                    )}
                    {width > 480 && width <= 1280 && (
                        <>
                            <p className='color_primary'>
                                <RelvealText value={RevealTextData.contact.paragraph[0][0]} />
                            </p>
                            <p className='color_primary'>
                                <RelvealText value={RevealTextData.contact.paragraph[0][1]} />
                            </p>
                        </>
                    )}
                    {width <= 480 && width >= 375 && (
                        <>
                            {RevealTextData.contact.paragraph[2].map((_) => {
                                return (
                                    <p className='color_primary'>
                                        <RelvealText value={_} />
                                    </p>
                                )
                            })}
                        </>
                    )}
                    {width < 375 && (
                        <>
                            <p className='color_primary'>
                                We unite creative ideas and passionate experts to effectively showcase a brand's unique appeal,
                            </p>
                            <p className='color_primary'>
                                planning and executing captivating advertising campaigns with a fresh perspective to enthrall consumers.
                            </p>
                        </>
                    )}
                </S.IntroTextBlock>
                <S.DepartmentBlock>
                    {DepartmentData.map((_, index) => {
                        return (
                            <S.DepartmentItem key={index}>
                                <div className='department__title'>
                                    <p className='color_secondary title'>{_.title}</p>
                                    <p className='color_secondary title_kor'>{_.titleKor}</p>
                                </div>
                                <div className='department__content'>
                                    {_.teams && (
                                        <div className='department__teams'>
                                            {_.teams?.map((team, i) => {
                                                return (
                                                    <span
                                                        key={i}
                                                        className='color_gray1'>
                                                        {team}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    )}
                                    <p className='department__introduction'>{_.introduction}</p>
                                    <p className='department__introduction'>{_.introductionKor}</p>
                                </div>
                            </S.DepartmentItem>
                        )
                    })}
                </S.DepartmentBlock>
            </S.Content>
            {media.tabletL && <ContactSideContainer />}
        </S.Container>
    )
}

export default ContactMainContainer
