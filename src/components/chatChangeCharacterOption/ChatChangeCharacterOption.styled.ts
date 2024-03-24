import { mediaQuery } from "@styles/mediaQuery";
import theme from "@styles/theme";
import styled from "styled-components";

const ChangeCharacterBlock = styled.div`
  position: relative;
`;

const CharacterOptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  width: 100%;
  bottom: calc(100% + 12px);
  right: 0;
  ${mediaQuery("tabletL")} {
    width: 140px;
    right: revert;
    left: 0;
  }
`;

const ChangeCharacterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: var(--changeCharacterButtonHeight);
  padding-inline: 14px;
  border: 1px solid ${theme.colors.gray10};
  border-radius: 4px;
  font-size: 1.2rem;
  color: ${theme.colors.gray6};
  background-color: black;

  cursor: pointer;

  &.active {
    color: ${theme.colors.gray1};
    border: 1px solid ${theme.colors.gray8};
    svg path {
      fill: ${theme.colors.gray1};
    }
  }
  @media (hover: hover) {
    &:hover {
      color: ${theme.colors.gray1};
      border: 1px solid ${theme.colors.gray8};
      svg path {
        fill: ${theme.colors.gray1};
      }
    }
  }

  ${mediaQuery("tabletL")} {
    border-radius: 8px;
    position: static;
    svg {
      transform: scale(1.5);
    }
  }
`;

export const ChatChangeCharacterOptionComponent = {
  ChangeCharacterButton,
  ChangeCharacterBlock,
  CharacterOptionList,
};
