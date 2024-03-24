import { mediaQuery } from "@styles/mediaQuery";
import { mixin } from "@styles/mixin";
import theme from "@styles/theme";
import styled from "styled-components";
const Footer = styled.footer`
  font-size: 1.2rem;
  color: ${theme.colors.gray10};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  background-color: black;
  padding-bottom: 30px;
  ${mediaQuery("tabletL")} {
    flex-direction: row;
    align-items: center;
    padding-bottom: 0;
  }
`;
const Content = styled.div`
  position: relative;

  background-color: black;
  ${mediaQuery("tabletL")} {
    flex-direction: row;
    height: var(--contentHeight);
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    border-top: 1px solid ${theme.colors.layout_line};
    padding-inline: ${theme.size.inline_safe_area};
    padding-top: 12px;
    padding-bottom: 22px;
  }
`;
const Container = styled.div`
  --inputSize: 50px;
  --sendButtonHeight: 24px;
  --changeCharacterButtonHeight: 32px;
  --contentHeight: 100px;

  --keywordButtonSize: 28px;
  --keywordButtonGap: 6px;
  padding: 0 40px 30px;
  margin-top: auto;
  ${mediaQuery("tabletL")} {
    --inputSize: 46px;
    --changeCharacterButtonHeight: 40px;
    height: calc(var(--contentHeight) + var(--bottom_keyword_height));
    padding: 0;
  }
  ${mediaQuery("mobile")} {
    --contentHeight: 80px;
  }
`;
export const AiChatControllerComponent = {
  Container,
  Content,
  Inner,
  Footer,
};
