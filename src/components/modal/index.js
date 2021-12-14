import React, { useState } from "react";
import Modal from "react-modal";
import * as S from "./styles";

export default function ModalWindow({ state }) {
  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    content: {
      position: "absolute",
      transition: "0.5s",
      width: "400px",
      height: "500px",
      top: "95px",
      left: "20px",
      right: "40px",
      bottom: "40px",
    },
  };

  return (
    <>
      <Modal closeTimeoutMS={500} isOpen={state.show} style={modalStyles}>
        <S.ContentDiv>
          <div className="title">{state.data.planet}</div>
          <div className="contents">{state.data.explain}</div>
        </S.ContentDiv>
      </Modal>
    </>
  );
}
