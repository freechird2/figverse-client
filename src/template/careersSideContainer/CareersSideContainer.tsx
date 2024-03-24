import React from "react";
import { useRecoilValue } from "recoil";
import { CareersSideContainerComponent as S } from "@template/careersSideContainer/CareersSideContainer.styled";
import useWidth from "@hooks/useWidth";
import { CAREERS_DATA } from "@template/careersMainContainer/CareersData";
import { careersDataState } from "@store/atom/careers";
const CareersSideContainer = () => {
  const { media } = useWidth();
  const careersIdx = useRecoilValue<number | null>(careersDataState);
  if (careersIdx !== null) {
    const data = CAREERS_DATA[careersIdx];
    return (
      <S.Container>
        <S.Content>
          <S.Title className="color_primary">{data.title}</S.Title>
          <S.ListGroupBlock>
            {data.description.map((_, index) => {
              return (
                <S.List key={index}>
                  <div className="list__title color_me">{_.list_title}</div>
                  <ul>
                    {_.list_text_array.map((__, index2) => {
                      return (
                        <li key={index2} className="prefix_dot color_gray1">
                          {__}
                        </li>
                      );
                    })}
                    {_.emphasis_text && (
                      <li className="color_gray1">{_.emphasis_text}</li>
                    )}
                  </ul>
                </S.List>
              );
            })}
            <S.List>
              <div className="list__title prefix prefix_star color_primary">
                포트폴리오 제출 시 프로젝트 참여 역할, 범위 등 명시
              </div>
              <ul>
                <li className="prefix_dash color_secondary">
                  제출해주신 서류를 검토한 후, 대면 면접(실무&컬쳐핏)을
                  진행해요.
                </li>
                <li className="prefix_dash color_secondary">
                  대면 면접 이후 처우협의를 거쳐 최종 합류 여부가 결정됩니다.
                </li>
                <li className="prefix_dash color_secondary">
                  정규직으로 채용됩니다.
                  <br />
                  다만 모든 입사자는 3개월의 수습기간을 두고 있습니다.
                  <br />
                  3개월간의 급여는 100% 지급됩니다.
                </li>
              </ul>
            </S.List>
          </S.ListGroupBlock>
        </S.Content>
        {!media.tabletL && (
          <S.ButtonBlock>
            <S.ApplyLink href={data.link} target="_blank">
              지원하기
            </S.ApplyLink>
          </S.ButtonBlock>
        )}
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.NoData>
        We’re looking for new members. <br />
        Don’t be shy and apply!
      </S.NoData>
    </S.Container>
  );
};

export default CareersSideContainer;
