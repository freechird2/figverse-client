import { mediaQuery } from "@styles/mediaQuery";
import { mixin } from "@styles/mixin";
import theme from "@styles/theme";
import Link from "next/link";
import styled, { css } from "styled-components";

const prefixStyle = css`
  display: flex;
  align-items: first baseline;
  gap: 8px;
  &:before {
    content: "•";
    display: block;
    color: inherit;
  }
  &.prefix_dot:before {
    content: "•";
  }
  &.prefix_dash:before {
    content: "-";
  }
  &.prefix_star:before {
    content: "*";
  }
`;

const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${theme.colors.gray8};
  line-height: 1.56;
  font-size: 1.6rem;
  text-align: center;
  user-select: none;
`;

const ApplyLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 44px;
  line-height: 44px;
  border-radius: 4px;
  text-align: center;
  color: #000;
  font-weight: 700;
  font-size: 1.2rem;
  background-color: ${theme.colors.primary};
  user-select: none;
  ${mediaQuery("tabletL")} {
  }
`;
const ButtonBlock = styled.div`
  padding: 16px 60px 40px;
  ${mediaQuery("tabletL")} {
    padding-bottom: 0;
    padding-inline: ${theme.size.inline_safe_area};
  }
`;
const List = styled.div`
  .list__title {
    font-size: var(--list_text_fontSize);
    padding-bottom: 8px;
    &.prefix {
      ${prefixStyle}
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    li {
      word-break: keep-all;
      font-size: var(--list_text_fontSize);
      line-height: var(--list_text_lineHeight);

      ${prefixStyle}
    }
  }
  ${mediaQuery("tabletL")} {
    .list__title {
      padding-bottom: 12px;
    }
    ul {
      gap: 8px;
      li {
      }
    }
  }
`;
const ListGroupBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Title = styled.div`
  font-size: 1.6rem;
  padding-bottom: 40px;
  padding-top: 93px;
  ${mediaQuery("tabletL")} {
    padding-top: 0px;
  }
`;
const Content = styled.div`
  flex: 1;
  padding: 40px 60px;
  overflow: auto;
  ${mixin.scrollStyle}
  ${mediaQuery("tabletL")} {
    padding: 0;
  }
`;
const Container = styled.div`
  --list_text_fontSize: 1.2rem;
  --list_text_lineHeight: 1.8;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${mediaQuery("tabletL")} {
    --list_text_fontSize: 1.3rem;
  }
`;
export const CareersSideContainerComponent = {
  Container,
  Content,
  Title,
  ListGroupBlock,
  List,
  ApplyLink,
  ButtonBlock,
  NoData,
};
