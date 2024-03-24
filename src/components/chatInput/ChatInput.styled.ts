import { mediaQuery } from "@styles/mediaQuery";
import { mixin } from "@styles/mixin";
import theme from "@styles/theme";
import styled from "styled-components";

const InputBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  background-color: ${theme.colors.gray12};
  border-radius: 4px;
  padding-inline: 20px;
  height: var(--inputSize);
  border: 1px solid rgba(255, 255, 255, 0.04);

  ${mediaQuery("tabletL")} {
    padding-inline: 14px;
  }
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  &::placeholder {
    color: ${theme.colors.gray9};
  }
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--sendButtonHeight);
  height: var(--sendButtonHeight);
  flex-shrink: 0;
  border-radius: 4px;
  background-color: ${theme.colors.gray11};
  cursor: pointer;
  &.active {
    background-color: ${theme.colors.primary};
    svg {
      path {
        fill: ${theme.colors.gray12};
      }
    }
  }
`;

export const ChatInptComponent = {
  Input,
  InputBlock,
  SendButton,
};
