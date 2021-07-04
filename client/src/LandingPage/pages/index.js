import React, { useState } from "react";
import Sidebar from "../components/HomePageComponents/Sidebar";
import Navbar from "../components/HomePageComponents/Navbar";
import HeroSection from "../components/HomePageComponents/HeroSectionElements";
import InfoSection from "../components/HomePageComponents/InfoSection";
import Advantages from "../components/HomePageComponents/Advantages";
import Footer from "../components/HomePageComponents/Footer";
import LanguageSelectionScreen from "../components/HomePageComponents/LanguageSelectionScreen";
import ContactUs from "../components/HomePageComponents/ContactUs/index";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setlanguageOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setlanguageOpen(!languageOpen);
  };
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        toggleLanguage={toggleLanguage}
        locale={props.locale}
        content={props.dataLanguages.navBar}
      />
      <Navbar
        toggle={toggle}
        toggleLanguage={toggleLanguage}
        locale={props.locale}
        content={props.dataLanguages.navBar}
      />
      <LanguageSelectionScreen
        languageOpen={languageOpen}
        toggleLanguage={toggleLanguage}
        props={props}
      />
      <HeroSection
        content={props.dataLanguages.heroSection}
        locale={props.locale}
      />
      <ContactUs
        content={props.dataLanguages.homeObjOne}
        locale={props.locale}
      />

      <Footer content={props.dataLanguages.footer} locale={props.locale} />
    </>
  );
};

export default Home;
