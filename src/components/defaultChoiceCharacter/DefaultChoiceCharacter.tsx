import Button, {
  BUTTON_COLOR,
  ButtonComponent,
} from "@components/button/Button";
import { AiCharacterData, AiCharacterNameType } from "@shared/constant";
import { aiCharacterState } from "@store/atom/aiCharacter";
import { mediaQuery } from "@styles/mediaQuery";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  .buttonBlock {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    padding-block: 60px 30px;
  }
  p {
    text-align: center;
    line-height: 1.56;
    font-size: 1.6rem;
  }
  ${mediaQuery("notebookS")} {
    width: min(100%, 480px);
    margin-inline: auto;
    .buttonBlock {
      ${ButtonComponent} {
        flex: revert;
        width: calc(50% - 6px);
      }
    }
  }
`;

const DefaultChoiceCharacter = () => {
  const [character, setCharacter] =
    useRecoilState<AiCharacterNameType>(aiCharacterState);

  return (
    <Container>
      <p>Please choose a character you want to have a conversation with.</p>
      <div className="buttonBlock">
        {AiCharacterData.map((_, index) => {
          return (
            <Button
              key={_.value}
              $activeColor={_.value}
              onClick={() => setCharacter(_.name)}
            >
              {_.name}
            </Button>
          );
        })}
      </div>
    </Container>
  );
};

export default DefaultChoiceCharacter;
