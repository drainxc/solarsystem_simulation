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
    transition: 0.3s;
    img {
      width: 32px;
      height: 32px;
    }
  }
  .planet0 {
    left: 20px;
  }
  .planet1 {
    left: 75px;
  }
  .planet2 {
    left: 130px;
  }
  .planet3 {
    left: 185px;
  }
  .planet4 {
    left: 240px;
  }
  .planet5 {
    left: 295px;
  }
  .planet6 {
    left: 350px;
  }
  .planet7 {
    left: 405px;
  }
  .planet8 {
    left: 460px;
  }
  button:hover {
    transform: scale(0.9);
  }
`;
