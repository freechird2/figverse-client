import theme from "@styles/theme";
import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

const Dim = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;
const CloseButton = styled(motion.button)`
  --closeButtonSize: 24px;
  position: absolute;
  top: var(--topPadding);
  right: calc(var(--closeButtonSize) * -1 - 10px);
  cursor: pointer;
`;
const MenuItem = styled.button`
  --itemHeight: 54px;
  display: flex;
  align-items: center;
  height: var(--itemHeight);
  padding-inline: 20px;
  border-bottom: 1px solid ${theme.colors.layout_line};
  &:first-of-type {
    border-top: 1px solid ${theme.colors.layout_line};
  }
  &.active {
    background-color: ${theme.colors.primary};
    color: black;
    font-weight: 700;
  }
`;
const MenuGroupBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterBlock = styled.div`
  margin-top: auto;
  padding-inline: 20px;
  .linkGroup {
    display: flex;
    gap: 30px;
    padding-bottom: 20px;
  }
  .footer {
    font-size: 1.2rem;
    line-height: 1.4;
    color: ${theme.colors.gray10};
  }
`;

const Content = styled(motion.div)`
  --topPadding: 20px;
  display: flex;
  flex-direction: column;

  position: relative;
  height: 100%;
  width: 230px;
  background-color: black;
  padding-top: var(--topPadding);
  padding-bottom: 20px;
  border-right: 1px solid ${theme.colors.layout_line};
`;

const Container = styled.nav`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1100;
`;
export const GlobalMobileNavComponent = {
  Container,
  Content,
  Dim,
  CloseButton,
  MenuGroupBlock,
  FooterBlock,
  MenuItem,
};
