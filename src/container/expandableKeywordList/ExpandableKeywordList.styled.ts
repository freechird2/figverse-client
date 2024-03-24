import { mixin } from "@styles/mixin";
import theme from "@styles/theme";
import styled from "styled-components";

const InnerSlideBlock = styled.div`
  /* --maxLineCount: 6; */
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: var(--keywordButtonGap);
  overflow: auto hidden;
  padding-inline: ${theme.size.inline_safe_area};
  ${mixin.hiddenScorllStyle}
  button {
    border: 1px solid ${theme.colors.gray10};
    height: var(--keywordButtonSize);
    padding-inline: 10px;
    border-radius: 999px;
    font-size: 1.2rem;
    color: ${theme.colors.gray6};
    white-space: nowrap;
  }
  /* &.expanded {
    overflow: hidden auto;
    max-height: calc(
      var(--keywordButtonSize) * var(--maxLineCount) + var(--keywordButtonGap) *
        calc(var(--maxLineCount) - 1) - calc(var(--keywordButtonSize) / 2)
    );
    flex-wrap: wrap;
    ${mixin.scrollStyle}
    button {
      background-color: #0f0f0f;
    }
  } */
`;
const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--keywordButtonSize);
  height: var(--keywordButtonSize);
  border-radius: 50%;
  border: 1px solid ${theme.colors.gray11};
  margin-inline: ${theme.size.inline_safe_area};
  background-color: rgba(45, 45, 45, 0.8);
  &.active {
    transform: rotate(180deg);
  }
`;
// const ToggleButtonBlock = styled.div`
//   display: flex;ㅅ
//   align-items: center;
//   justify-content: center;
// `;
const Container = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  bottom: var(--contentHeight);
  left: 0;
  right: 0;
  width: 100%;
  min-height: var(--bottom_keyword_height);
  padding-block: 10px;
  border-top: 1px solid ${theme.colors.layout_line};

  background-color: black;
  &.expanded {
    ${mixin.blurStyle}
    background-color: rgba(15, 15, 15, 0.90);
  }
`;
export const ExpandableKeywordListComponent = {
  Container,
  InnerSlideBlock,
  // ToggleButtonBlock,
  // ToggleButton,
};
