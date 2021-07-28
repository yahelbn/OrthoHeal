import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: ${({ localeEn }) => (localeEn ? "150vh" : "130vh")};
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    height: ${({ localeEn }) => (localeEn ? "210vh" : "180vh")};
    //   height: 1550px;
  }

  @media screen and (max-width: 380px) and (max-height: 670px) {
    height: ${({ localeEn }) => (localeEn ? "235vh" : "210vh")};
    //   height: 1550px;
  }

  @media screen and (max-width: 320px) {
    height: ${({ localeEn }) => (localeEn ? "250vh" : "235vh")};
    //   height: 1550px;
  }
  /* :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  } */
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: white;
`;

export const VideoBg = styled.video`
  /* width: 80%;
  height: 80%; */
  width: 20vw;
  height: 70vh;
  background: white;
  @media screen and (max-width: 850px) {
    width: 30vw;
  }
  @media screen and (max-width: 480px) {
    width: 65vw;
  }
`;

export const HeroContent = styled.div`
  /* z-index: 3; */

  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: black;
  text-shadow: 1px 1px 2px #000000;
  letter-spacing: 0.2rem;
  font-size: 48px;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroPHeader = styled.p`
  color: black;
  text-shadow: 1px 1px 2px #000000;
  letter-spacing: 0.2rem;
  font-weight: 600;
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroP = styled.p`
  color: black;
  font-weight: 600;
  margin-top: 20px;
  font-size: 22px;
  text-align: center;
  max-width: 600px;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ImgWrap = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    margin: 0 0;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  height: 100%;
  width: 100%;
`;

export const HeroGrid = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1.3fr;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  } */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) and (min-width: 480px) {
    margin-left: 40px;
  }
`;

export const ColumnOfContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60vw;
  @media screen and (max-width: 850px) {
    width: 50vw;
  }
  @media screen and (max-width: 480px) {
    width: 82vw;
    margin-bottom: 20px;
  }
`;
