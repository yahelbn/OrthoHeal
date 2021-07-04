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

//Import Modal

import "../../DiffrentModals/Modal/Modal.css";
import Modal from "../../DiffrentModals/Modal/Modal";
import useModal from "../../DiffrentModals/Modal/useModal";
import ModalContactUs from "../../DiffrentModals/ModalContactUs/index";

const Footer = ({ content, locale }) => {
  const { isShowing, toggle } = useModal();
  const [contentOfModal, setContentOfModal] = useState("");

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {});

  // const renderFooterLinks = content.map((footerCol, index) => {
  //   return (
  //     <React.Fragment key={index}>
  //       <FooterLinkItems>
  //         {footerCol.map((footerLink, index) => {
  //           if (index === 0) {
  //             return (
  //               <React.Fragment key={index}>
  //                 <FooterLinkTitle to="/signin">
  //                   {footerLink.name}
  //                 </FooterLinkTitle>
  //               </React.Fragment>
  //             );
  //           }
  //           return (
  //             <React.Fragment key={index}>
  //               <FooterLink to={`/${locale}/${footerLink.link}`}>
  //                 {footerLink.name}
  //               </FooterLink>
  //             </React.Fragment>
  //           );
  //         })}
  //       </FooterLinkItems>
  //     </React.Fragment>
  //   );
  // });
  return (
    <FooterContainer>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        modalcomp={<Modal modalContent={contentOfModal} />}
      />
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinkWrapper>{renderFooterLinks}</FooterLinkWrapper>
        </FooterLinksContainer> */}
        <Row
          style={{
            flexDirection: "row-reverse",
          }}
        >
          <Row>
            {" "}
            <LabelFooter>
              {content.label1}
              <a href="https://il.orthoheal.com/?fbclid=IwAR0yLDpbO4HKQ_O_GS83aeKEroZMMCiIXXnvZWv2ifkYVZcdwqp0fPAAMUk">
                {content.link1}{" "}
              </a>
            </LabelFooter>
          </Row>

          <Row>
            {" "}
            <LabelFooter>{content.label2}</LabelFooter>
          </Row>
          <Row>
            {" "}
            <LabelFooter>{content.label3}</LabelFooter>
          </Row>
        </Row>
        <SocialMedia>
          <SocialMediaWrap>
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
              {/* <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/yahelbn"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/yahel-bar-noam/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
