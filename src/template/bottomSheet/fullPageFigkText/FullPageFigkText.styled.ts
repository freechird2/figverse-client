import { RelatedFigkTextKeywordComponent } from "@components/relatedFigkTextKeyword/RelatedFigkTextKeyword";
import theme from "@styles/theme";
import styled from "styled-components";

const KeywordMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: 38px;
  border-top: 1px solid ${theme.colors.gray12};
  border-bottom: 1px solid ${theme.colors.gray12};
  color: ${theme.colors.gray6};
  &.limit {
    svg {
      transform: rotate(180deg);
    }
  }
  &.expand {
    svg {
      transform: rotate(0deg);
    }
  }
`;

const KeywordGroup = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  overflow: hidden;
  button {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    border: 1px solid ${theme.colors.gray10};
    border-radius: 999px;
    padding-inline: 10px;
    height: var(--keywordItemHeight);
    font-size: 1.2rem;
    color: ${theme.colors.gray6};
    &.active {
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  }
`;
const KeywordBlock = styled.div`
  --keywordMaxLine: 3;
  --keywordItemHeight: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
  &.default {
    ${KeywordGroup} {
      height: auto;
      span {
        height: auto;
      }
    }
  }
  &.limit {
    ${KeywordGroup} {
      height: calc(
        var(--keywordMaxLine) * var(--keywordItemHeight) +
          calc(var(--keywordMaxLine) - 1) * 8px
      );
    }
  }
  &.expand {
    ${KeywordGroup} {
      height: auto;
    }
  }
`;
const FigkTextBlock = styled.div`
  width: min(100%, 415px);
  margin-inline: auto;

  .currentKeyword {
    display: inline-block;
    color: ${theme.colors.gray6};
    padding-bottom: 30px;
    &:before {
      content: "#";
      color: inherit;
    }
  }
`;
const Content = styled.div`
  padding-inline: ${theme.size.inline_safe_area};
`;
const Container = styled.div``;
export const FullPageFigkTextComponent = {
  Container,
  Content,
  KeywordBlock,
  KeywordMoreButton,
  FigkTextBlock,
  KeywordGroup,
};
