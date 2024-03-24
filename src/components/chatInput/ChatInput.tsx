import { ChatInptComponent as S } from "@components/chatInput/ChatInput.styled";
import React, { ComponentPropsWithRef, useRef } from "react";
import IconSend from "../../../public/images/svg/input_send.svg";

interface Props extends ComponentPropsWithRef<"input"> {
  value: string;
  onSendMessage: () => void;
}

const ChatInput = ({ value, onSendMessage, ...rest }: Props) => {
  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      onSendMessage();
    }
  };

  return (
    <S.InputBlock>
      <S.Input
        type="text"
        value={value}
        placeholder="Enter your message."
        onKeyDown={onKeyUp}
        {...rest}
      />
      <S.SendButton
        type="button"
        className={value.length > 0 ? "active" : ""}
        onClick={onSendMessage}
      >
        <IconSend />
      </S.SendButton>
    </S.InputBlock>
  );
};

export default ChatInput;
