import theme from "@styles/theme";
import Image from "next/image";
import styled from "styled-components";
import FigImage from "/public/images/png/fig_ascii.png";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  p {
    text-align: center;
    font-size: 1.6rem;
    line-height: 25px;
    color: ${theme.colors.gray8};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  padding-bottom: 11vh;
`;

const KeywordNodata = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          width={30}
          height={48}
          src={"/images/svg/nodata-fig.svg"}
          alt="nodata fig icon"
        />
        <p>
          We recommend FIGK based on the keywords
          <br />
          generated during the conversation,
          <br />
          so please read them!
        </p>
      </Wrapper>
    </Container>
  );
};

export default KeywordNodata;
