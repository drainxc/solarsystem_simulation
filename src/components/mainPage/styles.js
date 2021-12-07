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
  .Sun {
    left: 20px;
  }
  .Mercury {
    left: 75px;
  }
  .Venus {
    left: 130px;
  }
  .Earth {
    left: 185px;
  }
  .Moon {
    left: 240px;
  }
  .Mars {
    left: 295px;
  }
  .Jupiter {
    left: 350px;
  }
  .Saturn {
    left: 405px;
  }
  .Uranus {
    left: 460px;
  }
  .Neptune {
    left: 515px;
  }
  button:hover {
    transform: scale(0.93);
  }
`;
