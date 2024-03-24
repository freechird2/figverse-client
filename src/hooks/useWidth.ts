"use client";
import { breakpoints } from "@styles/mediaQuery";
import { useEffect, useState } from "react";

export interface BPTypes {
  mobile: boolean;
  tabletS: boolean;
  tabletM: boolean;
  tabletL: boolean;
  notebookS: boolean;
  notebookM: boolean;
  notebookL: boolean;
}

function useWidth() {
  // 초기 state 값은 with undefined width/height로 세팅한다.
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const BP: BPTypes = {
    mobile: windowWidth <= breakpoints.mobile,
    tabletS: windowWidth <= breakpoints.tabletS,
    tabletM: windowWidth <= breakpoints.tabletM,
    tabletL: windowWidth <= breakpoints.tabletL,
    notebookS: windowWidth <= breakpoints.notebookS,
    notebookM: windowWidth <= breakpoints.notebookM,
    notebookL: windowWidth <= breakpoints.notebookL,
  };

  useEffect(() => {
    // window resize를 위한 핸들러
    function handleResize() {
      // 윈도우의 넓이/높이(width/height)를 set을 해준다
      setWindowWidth(
        window.innerWidth
        // height: window.innerHeight,
      );
    }

    // 이벤트 리스너 부착
    window.addEventListener("resize", handleResize);

    // 핸들러를 바로 불러서 state가 초기 window size로 업데이트 될 수 있도록한다
    handleResize();

    //이벤트리스너 제거 그리고 청소
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width: windowWidth, media: BP };
}

export default useWidth;
