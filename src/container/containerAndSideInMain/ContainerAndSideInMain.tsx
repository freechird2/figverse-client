import React from "react";
import { ContainerAndSideInMainComponent } from "@container/containerAndSideInMain/ContainerAndSideInMain.styled";
import useWidth from "@hooks/useWidth";
interface Props {
  mainComponent: React.ReactNode;
  sideComponent: React.ReactNode;
}
const ContainerAndSideInMain = ({ mainComponent, sideComponent }: Props) => {
  const { media } = useWidth();
  return (
    <ContainerAndSideInMainComponent.Wrapper>
      <ContainerAndSideInMainComponent.Container>
        {mainComponent}
      </ContainerAndSideInMainComponent.Container>
      {/* <ContainerAndSideInMainComponent.Resize /> */}
      {!media.tabletL && (
        <ContainerAndSideInMainComponent.Side>
          {sideComponent}
        </ContainerAndSideInMainComponent.Side>
      )}
    </ContainerAndSideInMainComponent.Wrapper>
  );
};

export default ContainerAndSideInMain;
