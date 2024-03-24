import { RevealColorType, RevealParagraphType } from "@shared/revealTextData";
import React, { useEffect, useRef } from "react";
const RandomText = ({
  text,
  index,
  color = "color_primary",
}: {
  text: string;
  index: number;
  color?: RevealColorType;
}) => {
  const revealTextRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const theLetters = "FIGVERSE#%&^+=-*!@_"; //You can customize what letters it will cycle through
    const ctnt = text; // Your text goes here
    const speed = 50; // ms per frame
    const increment = 10; // frames per step. Must be >2

    const clen = ctnt.length;
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    setTimeout(() => {
      function rustle(i: number) {
        setTimeout(function () {
          if (--i) {
            rustle(i);
          }
          nextFrame(i);
          si = si + 1;
        }, speed);
      }

      function nextFrame(pos: any) {
        for (var i = 0; i < clen - stri; i++) {
          //Random number
          var num = Math.floor(theLetters.length * Math.random());
          //Get random letter
          var letter = theLetters.charAt(num);
          block = block + letter;
        }
        if (si == increment - 1) {
          stri++;
        }
        if (si == increment) {
          // Add a letter;
          // every speed*10 ms
          fixed = fixed + ctnt.charAt(stri - 1);
          si = 0;
        }
        if (revealTextRef.current) {
          revealTextRef.current!.innerHTML = fixed + block;
        }
        block = "";
      }

      rustle(clen * increment + 1);
    }, index * 20);
  }, []);

  return (
    <span
      style={{
        position: "relative",
      }}
    >
      <span
        style={{
          display: "inline-block",
          color: "#000",
          font: "inherit",
          userSelect: "none",
        }}
      >
        {text}
      </span>
      <span
        ref={revealTextRef}
        className={color}
        style={{
          position: "absolute",
          top: "6px",
          left: "0",
          transform: "translate3d(0,-25%,0)",
          font: "inherit",
        }}
      ></span>
    </span>
  );
};

const RelvealText = ({ value }: { value: RevealParagraphType }) => {
  return (
    <>
      {value.text.map((_text, index) => {
        return (
          <RandomText
            key={index}
            index={index}
            text={_text}
            color={value.color}
          />
        );
      })}
    </>
  );
};

export default RelvealText;
