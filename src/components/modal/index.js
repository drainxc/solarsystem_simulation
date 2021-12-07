import React from "react";
import Modal from "react-modal";

export default function ModalWindow({show, data}) {
  return (
    <Modal
      isOpen={show}
      onRequestClose={() =>
        this.setState({
          show: false,
        })
      }
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
      {data}
    </Modal>
  );
}
