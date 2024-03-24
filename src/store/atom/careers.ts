import { atom } from "recoil";

export const careersDataState = atom<number | null>({
  key: "careersDataState",
  default: null,
});
