import React, { useState } from "react";
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
  AlertText,
} from "./ContactUsElements";
import ReactHtmlParser from "react-html-parser";
import Loader from "react-loader-spinner";

import "../../DiffrentModals/Modal/Modal.css";
import Modal from "../../DiffrentModals/Modal/Modal";
import useModal from "../../DiffrentModals/Modal/useModal";
import ModalContactUs from "../../DiffrentModals/ModalContactUs/index";

import axios from "axios";

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
  const { isShowing, toggle } = useModal();
  const [contentOfModal, setContentOfModal] = useState("");

  const [fullName, setFullName] = useState();
  const [telephone, setTelephone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");
  const [error, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

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

  const sendMail = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/mails/send`, {
        sender: { telephone: telephone, email: email, fullName: fullName },
      });
      setIsError(false);
      setLoader(false);
      setMessage("Your details have been sent");
      //  setTimeout(() => {}, 2000);
      toggle();
      console.log("hereeeee");
    } catch (e) {
      setIsError(true);
      setMessage("Your details have not been sent");
      setLoader(false);
    }
  };

  const ConvertDescription = ReactHtmlParser(description);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          {/* <Modal
            isShowing={isShowing}
            hide={toggle}
            modalcomp={
              <ModalContactUs
                modalContent={contentOfModal}
                // company={choseCompany}
                //locale={props.locale}
              />
            }
          /> */}
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper rtl={Boolean(rtl) ? true : false}>
                <FormContent>
                  <Form action="#" rtl={Boolean(content.rtl) ? true : false}>
                    <FormH1>{content.formh1}</FormH1>
                    <TextHeader>{content.text}</TextHeader>

                    <FormLabel htmlFor="for">{content.formlabel1}</FormLabel>
                    <FormInput
                      type={content.forminput1}
                      required
                      onChange={(event) => {
                        setFullName(event.target.value);
                      }}
                    />
                    <FormLabel htmlFor="for">{content.formlabel2}</FormLabel>
                    <FormInput
                      type={content.forminput2}
                      required
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                    <FormLabel htmlFor="for">{content.formlabel3}</FormLabel>
                    <FormInput
                      type={content.forminput3}
                      required
                      onChange={(event) => {
                        setTelephone(event.target.value);
                      }}
                    />
                    <FormButton
                      onClick={() => {
                        sendMail();
                      }}
                      type="submit"
                    >
                      {loader ? (
                        <Loader
                          type="Puff"
                          color="#DCD9C6"
                          height={35}
                          width={35}
                          timeout={10000}
                        />
                      ) : (
                        content.formbutton
                      )}
                    </FormButton>

                    {message && <AlertText error={error}>{message}</AlertText>}
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
