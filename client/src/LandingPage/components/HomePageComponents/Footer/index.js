import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinkWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  Row,
  LabelFooter,
} from "./FooterElements";
import OrthoHealLogo from "../../../images/OrthoHealLogo.webp";
import ReactHtmlParser from "react-html-parser";

//Import Modal

import "../../DiffrentModals/Modal/Modal.css";
import Modal from "../../DiffrentModals/Modal/Modal";
import useModal from "../../DiffrentModals/Modal/useModal";
import ModalContactUs from "../../DiffrentModals/ModalContactUs/index";

const Footer = ({ content, locale }) => {
  const { isShowing, toggle } = useModal();
  const [contentOfModal, setContentOfModal] = useState("");
  const label2 = ReactHtmlParser(content.label2);
  const label3 = ReactHtmlParser(content.label3);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {});

  return (
    <FooterContainer>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        modalcomp={<Modal modalContent={contentOfModal} />}
      />
      <FooterWrap>
        <Row
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <Row>
            {" "}
            <LabelFooter rtl={content.rtl}>
              {content.label1}
              <a
                href="https://il.orthoheal.com/?fbclid=IwAR0yLDpbO4HKQ_O_GS83aeKEroZMMCiIXXnvZWv2ifkYVZcdwqp0fPAAMUk"
                target="_blank"
              >
                {content.link1}{" "}
              </a>
            </LabelFooter>
          </Row>

          <Row>
            {" "}
            <LabelFooter rtl={content.rtl}>{label2}</LabelFooter>
          </Row>
          <Row>
            {" "}
            <LabelFooter rtl={content.rtl}>{label3}</LabelFooter>
          </Row>
        </Row>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <Row>
                <SocialIconLink
                  href="https://www.facebook.com/orthealil"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <LabelFooter> {content.label4}</LabelFooter>
              </Row>
            </SocialIcons>

            <SocialLogo to="/" onClick={toggleHome}>
              <img
                src={OrthoHealLogo}
                alt="OrthoHeal Logo-02.png"
                style={{ width: "120px", height: "100px", marginTop: "20px" }}
              />{" "}
            </SocialLogo>
            <WebsiteRights>
              © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
