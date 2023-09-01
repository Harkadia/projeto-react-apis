import styled from "styled-components";

export const TituloPagina = styled.h1`
  margin: 0;
  padding: 0;
  border: 0;
  font-family: "poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.5vw;
  color: black;
  background-color: lightgray;
  margin-left: 2vw;
  margin-top: 2vh;
`;

export const DivMae = styled.div`
  height: 87vh;
  width: 95vw;
  margin: 2vh 2rem 0;
  background-color: ${(props) => props.variant};
  border-radius: 2vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .div-1,
  .div-2,
  .div-3,
  .div-4 {
    display: flex;
    flex-direction: column;
  }

  .div-1 {
    grid-column: 1/2;
    grid-row: 1/3;
    margin: 3.5vh 0 0 2.3vw;


    .img1,
    .img2 {
      width: 18.1vw;
      height: 37vh;
      background-color: white;
      margin-bottom: 1.5rem;
     
      border-radius:1.5rem;
      display: flex;
      justify-content: center;
      align-items:center;
      img{
        height: 20vh;
      }
    }
  }

  .div-2 {
    position: absolute;
    left: 25.5vw;
    margin-top: 3vh;
    border-radius: 1vw;
    grid-column: 2/3;
    grid-row: 1/3;
    width: 23vw;
    height: 80vh;
    background-color: white;

    .power1 {
      color: black;
      font-size: 1.5rem;
      margin-left: 1vw;
      margin-top: 2vh;
      margin-right:2vw;
    }
  }

  .div-3 {
    grid-column: 3/4;
    grid-row: 1/3;
    margin-left: 2vw;
    border-radius: 1vw;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card {
      margin-top: 2vh;
      color: white;
      font-size: 1.3vw;
      font-family: inter, Arial, Helvetica, sans-serif;
      text-transform: capitalize;

      img {
        width: 5.2vw;
        margin: 0.3vw;
      }
    }

    .tex {
      border-radius: 1vw;
      background-color: white;
      margin-top: 30vh;
      height: 50vh;
      width: 16vw;
      position: absolute;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
      z-index: 2;
      padding: 4px;
      display: flex;

     

      span {
        border: dashed black 2px;
        border-radius: 10px;
        background-color: lightgray;
        padding: 10px;
        font-size: 0.5px;
        margin: 5px;
      }
    }
  }

  .div-4 {
    grid-column: 3/5;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;

    .img1 {
      position: absolute;
      right: 5vw;
      z-index: 1;
      width: 25vw;
      top: 30vh;

    }

    .img2 {
      position: relative;
      width: 47.5vw;
    }
  }

  .base__status__texts {
    font-size: 1.5rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;

  &::before {
    border-radius: 2vw;
    content: "";
    width: calc(${(props) => props.stat} * 1%);
    background-color: hsl(calc(${(props) => props.stat} * 0.8), 70%, 50%);
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2%;
  width: 100%;
  margin-top: 3%;
  font-size: 1vw;
  border: 0.1vw dashed rgba(245, 222, 179, 0.5);
  padding: 3% 0;
  text-align: right;

  span:nth-child(1) {
    width: 50%;
    padding-right: 3%;
    font-size: 0.9vw;
  }
`;
