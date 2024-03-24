import React from "react";
import { CareersListComponent as S } from "@container/careersList/CareersList.styled";
import IconArrow from "../../../public/images/svg/recruit_list_arrow.svg";
import { useSetRecoilState } from "recoil";
import useBottomSheet from "@hooks/useBottomSheet";
import useWidth from "@hooks/useWidth";
import FullPageCareersDetail from "@template/bottomSheet/fullPageCareersDetail/FullPageCareersDetail";
import { CAREERS_DATA } from "@template/careersMainContainer/CareersData";
import { careersDataState } from "@store/atom/careers";
const CareersList = () => {
  const { media } = useWidth();
  const { BottomSheet } = useBottomSheet();
  const setcareersIdx = useSetRecoilState<number | null>(careersDataState);
  const onClickDetail = (index: number) => {
    setcareersIdx(index);
    if (media.tabletL) {
      BottomSheet({ children: <FullPageCareersDetail />, fullpage: true });
    }
  };
  return (
    <S.Container>
      <S.List>
        {CAREERS_DATA.map((data, index) => {
          return (
            <S.Item key={index} onClick={() => onClickDetail(index)}>
              <S.Title className="title ellipsis color_me">
                {data.title}
              </S.Title>
              <S.ChipBlock className="chipBlock">
                <span className="chip color_primary">{data.career}</span>{" "}
                <span className="chip color_primary">
                  {data.recruitment_form}
                </span>
              </S.ChipBlock>
              <S.ApplyLink>
                자세히 보기 <IconArrow />
              </S.ApplyLink>
            </S.Item>
          );
        })}
      </S.List>
    </S.Container>
  );
};

export default CareersList;
