import { mediaQuery } from "@styles/mediaQuery";
import { mixin } from "@styles/mixin";
import { motion } from "framer-motion";
import styled from "styled-components";

const KeywordBlock = styled.div`
  padding-bottom: 10dvh;
`;
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 40px 75px;
  overflow: auto;
  ${mixin.scrollStyle}

  ${mediaQuery("tabletL")} {
  }
`;
export const S = {
  Container,
  KeywordBlock,
};
