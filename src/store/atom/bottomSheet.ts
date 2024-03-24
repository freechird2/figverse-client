import { atom } from "recoil";
export interface BottomSheetStateType {
  render: boolean;
  children: React.ReactNode;
  /** 바텀시트가 풀페이지 팝업 형태일 경우, default = false */
  fullpage?: boolean;
}
export const bottomSheetState = atom<BottomSheetStateType>({
  key: "bottomSheetState",
  default: {
    render: false,
    fullpage: false,
    children: null,
  },
});
