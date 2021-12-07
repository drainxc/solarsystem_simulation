import React, { useState } from "react";
import Modal from "react-modal";

export default function ModalWindow({ state }) {
  return (
    <Modal
      isOpen={state.show}
      style={{
        overlay: {
          backgroundColor: "rgba(255, 255, 255, 0)",
        },
        content: {
          position: "absolute",
          width: "400px",
          height: "500px",
          top: "95px",
          left: "20px",
          right: "40px",
          bottom: "40px",
        },
      }}
    >
      <div>{state.data.planet}</div>
      <div>{state.data.explain}</div>
    </Modal>
  );
}
