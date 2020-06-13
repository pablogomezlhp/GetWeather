import styled from "styled-components";

export const Header = styled.header`
  margin-top: 50px;
  display: flex;
  height: 100px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;

  width: 95vw;

  a {
    width: 191px;
    height: 60px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #212353;
    transition: color 0.2s;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 160%;
    /* or 26px */
    display: flex;
    align-items: center;
    letter-spacing: 0.005em;

    box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
    border-radius: 20px;
    &&:hover {
      color: #666;
    }
    svg {
      margin-right: 3px;
      width: 50px;
      height: 34px;
      color: #9c69e2;
    }
  }
  @media only screen and (max-width: 600px) {
    margin-top: 2px;

    a {
      width: 100px;
      height: 30px;
      padding-left: 0px;
      font-size: 10px;
    }
    svg {
      margin-right: 0px;
      width: 20px;
      height: 14px;
      color: #9c69e2;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: row;

  top: 200px;
  margin: 0 300px;

  background: #9c69e2;
  border-radius: 24px;

  width: 788.25px;
  height: 500px;

  @media only screen and (max-width: 600px) {
    position: relative;
    flex-direction: column;
    font-size: 7vw;
    width: 300px;
    height: 500px;
    margin: 0;
    margin-left: 20px;
    margin-top: -150px;

    margin-bottom: 50px;
  }

  @media only screen and (device-width: 768px) {
    display: flex;
    align-items: center;
    width: 500px;
    height: 300px;
    margin: 0;
    margin-left: 110px;
  }
`;
export const FirstDiv = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  align-items: center;

  width: 50%;
  height: 100%;
  max-width: 300px;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 600px) {
    position: relative;
    flex-direction: column;
    font-size: 7vw;
    width: 300px;
    height: 500px;
    margin: 0;
    margin-left: 0px;
    margin-top: -10px;
  }
`;

export const SecondDiv = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-left: 50px;

  img {
    margin-top: 100px;
  }
  p {
    color: #e1d2f6;

    font-weight: bold;
    font-size: 24px;
    line-height: 160%;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    font-size: 7vw;
    z-index: 1;
    margin: 0;
    margin-left: 0px;

    img {
      margin-top: 10px;
      width: 100px;
    }
  }

  @media only screen and (device-width: 768px) {
    img {
      margin-top: 1px;
      width: 150px;
      margin-right: 80px;
    }
    p {
      color: #e1d2f6;

      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      margin-right: 80px;
    }
  }
`;

export const Description = styled.text`
  top: 334px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 160%;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.005em;

  @media only screen and (device-width: 768px) {
    font-size: 24px;
    margin-right: 80px;
  }
`;

export const CityName = styled.text`
  display: flex;
  margin-right: 245px;

  padding-top: 40px;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 160%;


  letter-spacing: 0.005em;


  color: #212353;

  @media only screen and (max-width: 600px) {
    margin: 0;
    font-size: 40px;
  }

  @media only screen and (device-width: 768px) {
    margin-right: 0;
    font-size: 40px;
  }
`;

export const Temp = styled.text`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 90px;
  line-height: 160%;
  /* or 192px */
  display: flex;
  align-items: center;
  letter-spacing: 0.005em;

  color: #ffffff;

  padding-right: 15%;
  margin-top: 30px;

  @media only screen and (max-width: 600px) {
    top: 0;
    padding-right: 0;
    margin: 0;
    font-size: 60px;
  }

  @media only screen and (device-width: 768px) {
    margin-top: 1px;
    margin-left: 50px;
    padding-right: 0;

    margin-right: 0;
    font-size: 50px;
  }
`;

export const MinMax = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  color: #e1d2f6;

  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 160%;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.005em;

  @media only screen and (device-width: 768px) {
    font-size: 19px;
    margin-left: 50px;
  }
`;
