import theme from "@styles/theme";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  position: sticky;
  top: 0;
  height: ${theme.size.mobile_header_height};
  background-color: black;
  z-index: 1000;
  padding-inline: ${theme.size.inline_safe_area};
  button {
    cursor: pointer;
  }
  .logo {
    position: relative;
    width: 53.77px;
    height: 20px;
  }
`;

export const GlobalMobileHeaderComponent = {
  Container,
};
