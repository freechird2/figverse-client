import { mediaQuery } from "@styles/mediaQuery";
import { mixin } from "@styles/mixin";
import theme from "@styles/theme";
import styled from "styled-components";

const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 60px;
  ${mixin.scrollStyle}
  ${mediaQuery("tabletL")} {
    padding-inline: ${theme.size.inline_safe_area};
  }
  h1 {
    font-size: 1.6rem;
    padding-bottom: 40px;
  }
  .paragraph__block {
    padding-bottom: max(40px, 10vh);
    p {
      font-size: 1.6rem;
      line-height: 1.56;
    }
  }
  ${mediaQuery("tabletL")} {
    padding-top: 0;
  }
  ${mediaQuery("mobile")} {
    .paragraph__block {
      padding-bottom: 40px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const ContactSideContainerComponent = {
  Container,
  Content,
};
