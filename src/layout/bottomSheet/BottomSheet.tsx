import React from "react";
import { BottomSheetComponent as S } from "@layout/bottomSheet/BottomSheet.styled";
import useBottomSheet from "@hooks/useBottomSheet";
import { useRecoilValue } from "recoil";
import { bottomSheetState } from "@store/atom/bottomSheet";
import { AnimatePresence } from "framer-motion";
import { variants } from "@styles/variants";
const BottomSheet = () => {
  const { closeSheet } = useBottomSheet();
  const bottomSheet = useRecoilValue(bottomSheetState);
  return (
    <AnimatePresence>
      {bottomSheet.render && (
        <S.Container $fullpage={bottomSheet.fullpage}>
          {!bottomSheet.fullpage && (
            <S.Dim
              variants={variants.fadeInOut}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={closeSheet}
            />
          )}

          <S.Content
            variants={variants.fadeUpDown}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {bottomSheet.children}
          </S.Content>
        </S.Container>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
