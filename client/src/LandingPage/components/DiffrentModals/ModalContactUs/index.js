import React from "react";
// import girlsend from "../../../images/girlsend.svg";

import {
  FormButton,
  Paragraph,
  Row,
  Column,
  HeaderService,
  SubHeaderService,
  ImgWrap,
  Img,
} from "./ModalContactUsElements";
import messageImage from "./../../../images/undraw_real_time_collaboration_c62i.svg";
import { HiClipboardCheck } from "react-icons/hi";

const ModalContactUs = ({ modalContent, toggle }) => {
  // const renderRowsSerivces = modalContent.content.map((row, index) => {
  //   return (
  //     <React.Fragment key={index}>
  //       <Column rtl={modalContent.rtl} style={{ padding: "10px" }}>
  //         <Row rtl={modalContent.rtl}>
  //           <HiClipboardCheck size={21} />
  //           <SubHeaderService>{row.header}</SubHeaderService>
  //         </Row>
  //         <Paragraph rtl={modalContent.rtl}>{row.content}</Paragraph>
  //       </Column>
  //     </React.Fragment>
  //   );
  // });

  return (
    <Column>
      <HeaderService rtl={modalContent.rtl}>
        {modalContent.header}
      </HeaderService>
      <Paragraph rtl={modalContent.rtl}>{modalContent.p}</Paragraph>
      <ImgWrap>
        <Img src={messageImage}></Img>
      </ImgWrap>

      {/* <HeaderService>{modalContent.header}</HeaderService>

      {renderRowsSerivces}

      <FormButton type="submit">{modalContent.button}</FormButton> */}
    </Column>
  );
};

export default ModalContactUs;
