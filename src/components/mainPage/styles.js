import styled from "styled-components";

export const MainDiv = styled.div`
  button {
    position: absolute;
    background-color: white;
    border: none;
    border-radius: 7px;
    width: 50px;
    height: 50px;
    top: 20px;
    cursor: pointer;
    transition: 0.25s;
    z-index: 2;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .sun {
    left: 20px;
  }
  .mercury {
    left: 75px;
  }
  .venus {
    left: 130px;
  }
  .earth {
    left: 185px;
  }
  .moon {
    left: 240px;
  }
  .mars {
    left: 295px;
  }
  .jupiter {
    left: 350px;
  }
  .saturn {
    left: 405px;
  }
  .uranus {
    left: 460px;
  }
  .neptune {
    left: 515px;
  }
  button:hover {
    transform: scale(0.93);
  }
  #modal.modal-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 2;
  }
  #modal .modal-window {
    background: rgba(255, 255, 255, 255);
    margin-top: 150px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(13.5px);
    -webkit-backdrop-filter: blur(13.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 400px;
    height: 500px;
    position: relative;
    top: -100px;
    padding: 10px;
  }
  #modal .title {
    padding-left: 10px;
    display: inline;
    text-shadow: 1px 1px 2px gray;
    color: black;
    font-weight: bold;
    font-size: 30px;
  }
  #modal .title h2 {
    display: inline;
  }
  #modal .close-area {
    display: inline;
    float: right;
    padding-right: 10px;
    cursor: pointer;
    text-shadow: 1px 1px 2px gray;
    color: black;
  }

  #modal .content {
    margin-top: 20px;
    padding: 0px 10px;
    text-shadow: 1px 1px 2px gray;
    color: black;
  }
`;
