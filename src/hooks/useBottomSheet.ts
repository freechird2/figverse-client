import {
  BottomSheetStateType,
  bottomSheetState,
} from "@store/atom/bottomSheet";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

const useBottomSheet = () => {
  const [bottomSheet, setBottomSheet] =
    useRecoilState<BottomSheetStateType>(bottomSheetState);
  const openSheet = useCallback(
    ({ children, fullpage }: Omit<BottomSheetStateType, "render">) => {
      document.body.style.overflow = "hidden";
      setBottomSheet({
        render: true,
        children: children,
        fullpage: fullpage,
      });
    },
    [setBottomSheet]
  );
  const closeSheet = useCallback(() => {
    document.body.style.overflow = "initial";
    setBottomSheet((prev) => ({ ...prev, render: false }));
  }, [setBottomSheet]);

  const BottomSheet = ({
    children,
    fullpage,
  }: Omit<BottomSheetStateType, "render">) => {
    const BottomSheetData: Omit<BottomSheetStateType, "render"> = {
      children: children,
      fullpage: fullpage,
    };
    return openSheet(BottomSheetData);
  };
  return { bottomSheetState, closeSheet, BottomSheet };
};

export default useBottomSheet;
