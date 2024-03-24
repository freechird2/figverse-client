import { mixin } from "@styles/mixin";
import { mix, motion } from "framer-motion";
import { tree } from "next/dist/build/templates/app-page";
import styled from "styled-components";
import css from "styled-jsx/css";

// const Container = styled.div``;
const Dim = styled(motion.div)`
  ${mixin.dimStyle}
`;
const Content = styled(motion.div)``;

type BottomSheetForm = {
  $fullpage?: boolean;
};
const Container = styled.div<BottomSheetForm>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  padding-bottom: 30px;
  background-color: ${(p) => (p.$fullpage ? "#0f0f0f" : "revert")};
  ${Content} {
    height: ${(p) => (p.$fullpage ? "100%" : "revert")};
    overflow: ${(p) => (p.$fullpage ? "hidden auto" : "revert")};
    background-color: ${(p) => (p.$fullpage ? "#0f0f0f" : "revert")};
    ${mixin.scrollStyle}
  }
`;
export const BottomSheetComponent = {
  Container,
  Content,
  Dim,
};
