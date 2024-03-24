import { MenuDataType } from "@shared/menu";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//2. sessionStorage에 저장하고 싶은 경우
//Next.js를 쓴다면 sessionStorage는 아래와 같이 따로 설정 필요
const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "menuTabKey",
  storage: sessionStorage,
});

export const menuTabState = atom<string[]>({
  key: "menuTabKey",
  default: ["Home"],
  effects_UNSTABLE: [persistAtom],
});
