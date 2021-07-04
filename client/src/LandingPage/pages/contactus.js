import React from "react";
import ContactUsComp from "../components/ContactUsComp";
import ScrollToTop from "../components/ScrollToTop";
const ContactUsPage = (props) => {
  return (
    <div>
      <ScrollToTop />
      <ContactUsComp content={props.dataLanguages.contactus} />
    </div>
  );
};

export default ContactUsPage;
