import React from "react";
import { FullPageCareersDetailComponent as S } from "@template/bottomSheet/fullPageCareersDetail/FullPageCareersDetail.styled";
import FullPageHeader from "@components/fullPageComponents/FullPageHeader";
import { CareersSideContainerComponent } from "@template/careersSideContainer/CareersSideContainer.styled";
import { useRecoilValue } from "recoil";
import { CAREERS_DATA } from "@template/careersMainContainer/CareersData";
import CareersSideContainer from "@template/careersSideContainer/CareersSideContainer";
import { careersDataState } from "@store/atom/careers";
const FullPageCareersDetail = () => {
  const careersIdx = useRecoilValue<number | null>(careersDataState);
  if (careersIdx !== null) {
    const data = CAREERS_DATA[careersIdx];
    return (
      <S.Container>
        <FullPageHeader title="Apply" />
        <S.Content>
          <div className="inner">
            <CareersSideContainer />
          </div>
        </S.Content>
        <CareersSideContainerComponent.ButtonBlock>
          <CareersSideContainerComponent.ApplyLink href={data.link}>
            지원하기
          </CareersSideContainerComponent.ApplyLink>
        </CareersSideContainerComponent.ButtonBlock>
      </S.Container>
    );
  }

  return <></>;
};

export default FullPageCareersDetail;
