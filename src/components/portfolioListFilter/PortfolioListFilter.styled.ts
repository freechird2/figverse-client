import { mediaQuery } from "@styles/mediaQuery";
import { mixin } from "@styles/mixin";
import theme from "@styles/theme";
import styled from "styled-components";

const OptionBlock = styled.div`
  --filterOptionItemHeight: 34px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding-block: 8px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.gray11};
  ${mixin.blurStyle}
  background-color: rgba(15,15,15,0.85);
  ul {
    overflow: auto;
    max-height: 60dvh;
    ${mixin.scrollStyle}
    li {
      font-size: 1.3rem;
      color: ${theme.colors.gray1};
      height: 34px;
      line-height: 34px;
      padding-inline: 10px;
      @media (hover: hover) {
        &:hover {
          color: ${theme.colors.primary};
          background-color: ${theme.colors.gray12};
          cursor: pointer;
        }
      }
      &.selected {
      }
    }
  }
  ${mediaQuery("mobile")} {
    ul {
      max-height: ${`calc(var(--filterOptionItemHeight) * 7.5)`};
    }
  }
`;
const SelectedBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
  padding-inline: 10px;

  &:after {
    content: "";
    width: 17px;
    height: 17px;
    background-image: url("/images/svg/filter_arrow.svg");
    background-size: cover;
  }
  font-size: 1.3rem;
  color: ${theme.colors.gray8};
  &.placeholder {
    color: ${theme.colors.gray8};
  }
  &.focus {
    &:after {
      transform: rotate(180deg);
    }
  }
`;
const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  &.readonly {
    pointer-events: none;
    ${SelectedBlock} {
      &:after {
        display: none;
      }
    }
  }
`;

export const PortfolioListFilterComponent = {
  Container,
  SelectedBlock,
  OptionBlock,
};
