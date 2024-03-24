import theme from "@styles/theme";
import React from "react";
import styled from "styled-components";
import IconClose from "../../../public/images/svg/fullpage_close.svg";
import useBottomSheet from "@hooks/useBottomSheet";
const CloseButton = styled.button`
  width: 18px;
  height: 18px;
`;
const Title = styled.span`
  font-size: 1.6rem;
  color: #fff;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #0f0f0f;
  height: ${theme.size.mobile_header_height};
  padding-inline: ${theme.size.inline_safe_area};
`;

interface FullPageHeaderProps {
  title: string;
}
const FullPageHeader = ({ title }: FullPageHeaderProps) => {
  const { closeSheet } = useBottomSheet();
  return (
    <Header>
      <Title>{title}</Title>
      <CloseButton onClick={closeSheet}>
        <IconClose />
      </CloseButton>
    </Header>
  );
};

export default FullPageHeader;
