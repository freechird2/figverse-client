import { mixin } from "@styles/mixin";
import theme from "@styles/theme";
import styled from "styled-components";

const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding-block: 20px 40px;
  ${mixin.scrollStyle};
  .inner {
    padding-inline: ${theme.size.inline_safe_area};
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const FullPageCareersDetailComponent = {
  Container,
  Content,
};
