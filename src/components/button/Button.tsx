import theme from "@styles/theme";
import React, { ComponentPropsWithRef } from "react";
import styled from "styled-components";
import IconChecked from "../../../public/images/svg/character_checked.svg";
const BUTTON_SIZE = {
  size36: {
    borderRadius: "4px",
    height: "36px",
    fontSize: "1.2rem",
  },
  size44: {
    borderRadius: "4px",
    height: "44px",
    fontSize: "1.5rem",
  },
  size54: {
    borderRadius: "8px",
    height: "54px",
    fontSize: "1.5rem",
  },
};

export const BUTTON_COLOR = {
  designer: {
    backgroundColor: theme.colors.character_designer,
    borderColor: theme.colors.character_designer,
    color: "white",
  },
  developer: {
    backgroundColor: theme.colors.character_developer,
    borderColor: theme.colors.character_developer,
    color: "white",
  },
  pm: {
    backgroundColor: theme.colors.character_pm,
    borderColor: theme.colors.character_pm,
    color: "white",
  },
  hr_manager: {
    backgroundColor: theme.colors.character_hr_manager,
    borderColor: theme.colors.character_hr_manager,
    color: "white",
  },
};

const BUTTON_COLOR_PALLETE = {
  ...BUTTON_COLOR,
  default: {
    backgroundColor: theme.colors.gray12,
    borderColor: theme.colors.gray10,
    color: theme.colors.gray4,
  },
  cancel: {
    backgroundColor: "rgba(26,26,26,0.7)",
    borderColor: "rgba(26,26,26,0.7)",
    color: theme.colors.gray8,
  },
};

type ButtonSizeProps = keyof typeof BUTTON_SIZE;
export type ButtonColorProps = keyof typeof BUTTON_COLOR;
export type ButtonColorPalleteProps = keyof typeof BUTTON_COLOR_PALLETE;
interface ButtonComponentModel {
  $size: ButtonSizeProps;
  $activeColor: ButtonColorProps;
  $color: ButtonColorPalleteProps;
}
export const ButtonComponent = styled.button<ButtonComponentModel>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: ${(p) => `${BUTTON_SIZE[p.$size].height}`};
  border-radius: ${(p) => `${BUTTON_SIZE[p.$size].borderRadius}`};
  border: 1px solid ${(p) => `${BUTTON_COLOR_PALLETE[p.$color].borderColor}`};
  background-color: ${(p) =>
    `${BUTTON_COLOR_PALLETE[p.$color].backgroundColor}`};
  color: ${(p) => `${BUTTON_COLOR_PALLETE[p.$color].color}`};
  font-size: ${(p) => `${BUTTON_SIZE[p.$size].fontSize}`};
  font-weight: 700;
  text-align: center;
  padding-inline: 24px;
  cursor: pointer;
  user-select: none;

  span {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
  &.active {
    border: 1px solid ${(p) => `${BUTTON_COLOR[p.$activeColor].borderColor}`};
    .checked {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 12px;
      height: 12px;
    }
  }
  @media (hover: hover) {
    &:hover {
      border: 1px solid ${(p) => `${BUTTON_COLOR[p.$activeColor].borderColor}`};
      background-color: ${(p) =>
        `${BUTTON_COLOR[p.$activeColor].backgroundColor}`};
      color: ${(p) => `${BUTTON_COLOR[p.$activeColor].color}`};
      &.active {
        background-color: ${theme.colors.gray12};
        .checked {
          svg path {
            /* fill: ${(p) =>
              `${BUTTON_COLOR[p.$activeColor].backgroundColor}`}; */
          }
        }
      }
    }
  }
`;

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  $size?: ButtonSizeProps;
  $activeColor?: ButtonColorProps;
  $color?: ButtonColorPalleteProps;
}
const Button = ({
  children,
  $size = "size44",
  $activeColor = "developer",
  $color = "default",
  className,
  active = false,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonComponent
      type="button"
      $size={$size}
      $color={$color}
      $activeColor={$activeColor}
      className={`${active ? "active" : ""} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {active && (
        <div className="checked">
          <IconChecked />
        </div>
      )}
    </ButtonComponent>
  );
};

export default Button;
