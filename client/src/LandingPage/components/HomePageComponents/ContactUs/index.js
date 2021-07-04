import React from "react";
import { Button, ButtonRouter } from "../../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  FormContent,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Icon,
  Form,
  Container,
  TextHeader,
} from "./ContactUsElements";
import ReactHtmlParser from "react-html-parser";

const ContactUs = ({ content, locale }) => {
  const {
    lightBg,
    id,
    headLine,
    description,
    darkText,
    lightText,
    buttonLabel,
    alt,
    img,
    topLine,
    imgStart,
    primary,
    dark,
    dark2,
    rtl,
    routerlink,
    circleimg,
  } = content;

  const linkButton = createButton();

  function createButton() {
    if (routerlink) {
      console.log(locale);
      return (
        <ButtonRouter
          to={"/" + locale + "/contactus"}
          smooth={"true"}
          duration={500}
          spy="true"
          exact="true"
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dart2={dark2 ? 1 : 0}
        >
          {buttonLabel}
        </ButtonRouter>
      );
    } else {
      return (
        <Button
          to="home"
          smooth={"true"}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
          dart2={dark2 ? 1 : 0}
        >
          {buttonLabel}
        </Button>
      );
    }
  }

  const ConvertDescription = ReactHtmlParser(description);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper rtl={Boolean(rtl) ? true : false}>
                <FormContent>
                  <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
                    <FormH1>{content.formh1}</FormH1>
                    <TextHeader>{content.text}</TextHeader>

                    <FormLabel htmlFor="for">{content.formlabel1}</FormLabel>
                    <FormInput type={content.forminput1} required />
                    <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
                    <FormInput type={content.forminput2} required />
                    <FormLabel htmlFor="for">{content.formlabel3}</FormLabel>
                    <FormInput type={content.forminput3} required />
                    <FormButton type="submit">{content.formbutton}</FormButton>
                  </Form>
                </FormContent>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap circleimg={circleimg}>
                <Img circleimg={circleimg} src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactUs;
