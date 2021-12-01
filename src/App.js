import React from "react";
import MainPage from "./components/mainPage";
import GlobalStyle from "./styles/index";

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
