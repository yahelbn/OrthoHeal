import React, { useState } from "react";
import Video from "../../../videos/video.mp4";
import { Button } from "../../ButtonElement";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroPHeader,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Img,
  ImgWrap,
  HeroP,
  HeroGrid,
  Column,
  ColumnOfContent,
} from "./HeroSectionElements";
import ReactHtmlParser from "react-html-parser";

import ortohealwater from "./../../../images/ortohealwater.webp";
import FloatingWhatsApp from "react-floating-whatsapp";
import "react-floating-whatsapp/dist/index.css";
import OrthoHealLogo from "../../../images/OrthoHealLogo.webp";

const HeroSection = ({ content, locale }) => {
  const [hover, setHover] = useState(false);
  const { heroh1, herop, button, rtl, herop1, support, chatmessage } = content;
  const herop2convert = ReactHtmlParser(content.herop2);
  const herop3convert = ReactHtmlParser(content.herop3);
  const herop4convert = ReactHtmlParser(content.herop4);

  const herop5convert = ReactHtmlParser(content.herop5);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home" localeEn={locale === "en" ? true : false}>
      <HeroBg>
        <ImgWrap>
          <Img src={ortohealwater}></Img>
        </ImgWrap>
      </HeroBg>
      <HeroContent>
        <HeroH1>{heroh1}</HeroH1>

        <HeroGrid>
          <Column>
            {" "}
            <VideoBg
              controls
              // autoPlay
              loop
              src={
                "https://video.wixstatic.com/video/c60bce_eddcd9d43da0416da245ffaf6245c182/720p/mp4/file.mp4"
              }
              type="video/mp4"
            />
          </Column>
          <ColumnOfContent>
            <HeroPHeader rtl={rtl}>{herop}</HeroPHeader>
            <HeroP rtl={rtl}>{herop1}</HeroP>
            <HeroP rtl={rtl} style={{ fontWeight: "200" }}>
              {herop2convert}
            </HeroP>
            <HeroP rtl={rtl} style={{ fontWeight: "200" }}>
              {herop3convert}
            </HeroP>
            <HeroP rtl={rtl} style={{ fontWeight: "200" }}>
              {herop4convert}
            </HeroP>
            <HeroP rtl={rtl} style={{ fontWeight: "200" }}>
              {herop5convert}
            </HeroP>
          </ColumnOfContent>
        </HeroGrid>

        <HeroBtnWrapper>
          <Button
            to="probackground"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="false"
            smooth={"true"}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            {button} {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <FloatingWhatsApp
        accountName={`OrthoHeaL - ${support}`}
        chatMessage={chatmessage}
        phoneNumber={"+972523982954"}
        avatar={OrthoHealLogo}
      />
    </HeroContainer>
  );
};

export default HeroSection;
