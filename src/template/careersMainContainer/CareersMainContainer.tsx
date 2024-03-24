import RelvealText from '@components/revealText/RelvealText'
import CareersList from '@container/careersList/CareersList'
import { RevealTextData } from '@shared/revealTextData'
import { CareersMainContainerComponent as S } from '@template/careersMainContainer/CareersMainContainer.styled'

const CareersMainContainer = () => {
    return (
        <S.Container>
            <S.Content>
                <h1 className='color_developer'>
                    <RelvealText value={RevealTextData.careers.title} />
                </h1>
                <CareersList />
                <S.StaticTextBlock>
                    <div className='title color_primary'>
                        <RelvealText value={RevealTextData.careers.paragraph[0][0]} />
                    </div>
                    <div className='subject color_secondary'>
                        <RelvealText value={RevealTextData.careers.paragraph[1][0]} />
                        <br />
                        {/* <RelvealText value={RevealTextData.careers.paragraph[1][1]} /> */}
                    </div>
                    <div className='info color_gray1'>당신을 위한 피이그만의 회사 문화가 여기!</div>
                    <ul>
                        <li className='color_gray1'>
                            시간에 쫄지 마세요! 출퇴근 시간 압박은 이제 그만. 여러분의 생활에 맞춘 유연근무제로 업무와 여가를 자유롭게
                            조절하세요.
                        </li>
                        <li className='color_gray1'>
                            휴가, 휴가, 휴가! 1분 단위 연차 사용, 경조 휴가, 산전후 휴가, 남성 출산휴가, 육아휴직 등 다양한 휴가 옵션으로
                            여가를 충분히 즐겨보세요.
                        </li>
                        <li className='color_gray1'>
                            시간 외 근무 수당 + 보상 휴가: 열심히 일한 당신 쉬어라! 시간 외 근무에 대한 수당과 보상 휴가로 열심히 일한만큼
                            더 많은 혜택을 누리세요.
                        </li>
                        <li className='color_gray1'>
                            역량 개발 지원: 역량개발비, 교육훈련비, 그리고 경조사비, 회식비 등의 복리후생비를 지원합니다. 끊임없는 성장을
                            향해 함께 나아갑시다!
                        </li>
                        <li className='color_gray1'>
                            투어를 위한 유급휴가와 현금 지원: 매년 1명을 선정해 최대 300만 원의 지원과 5일간의 유급 휴가를 지원합니다.
                            당신의 안목을 키우세요!
                        </li>
                        <li className='color_gray1'>
                            놀이터 사무실: 업계 최고 수준의 장비, 스낵바, 각종 주류, 게임기, 다트 등 다양한 즐길 거리를 제공합니다. 푸짐한
                            상품이 걸린 대회도 놓치지 마세요!
                        </li>
                        <li className='color_gray1'>
                            최고의 복지는, 뛰어난 동료: 업계최고의 포트폴리오를 함께 만들어갈 열정적인 동료들과 함께하세요. 함께 성장하고
                            놀기를 즐겨봐요!
                        </li>
                    </ul>
                    <div className='joinus color_gray1'>JOIN US?</div>
                </S.StaticTextBlock>
            </S.Content>
        </S.Container>
    )
}

export default CareersMainContainer
