import React from "react";
import MainPage from "./components/mainPage";
import GlobalStyle from "./styles/index";
import Modal from "react-modal";

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <MainPage />
      </>
    );
  }
}

Modal.setAppElement('#root')