import styled from "styled-components";

export const Header = styled.header`
  margin-top: 50px;
  display: flex;
  height: 100px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin-top: 8vw;
  padding-bottom: 30px;
  font-size: 4vw;
  font-weight: 900;
  padding-left: 10vw;
  letter-spacing: 0.005em;
  color: #212353;

  line-height: 160%;

  @media only screen and (max-width: 600px) {
    font-size: 7vw;
    padding-left: 0;
  }

  @media only screen and (device-width: 768px) {
    display:flex;
    justify-content:center;
    font-size: 40px;

    text-align: center;
  }
`;

export const Form = styled.div`
form{
display:flex;


flex-direction:row;
margin-left:10vw;

}



  input{
    flex: 1;
    height: 54px;
    width:30vw;
    padding: 0 24px;
    border: 0;
    border-radius: 20px 0px 0px 20px;
    color: #3a3a3a;
    border: #3a3a3a;
    border-right: 0;

    font-size:14px;

    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  }

  button{
    font-size:2vw;


    width: 15vw;
    height: 54px;
    background: #9C69E2;

    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0px 20px 20px 0px;

  }
  button:hover{
    background: #9C69E5;
  }

  @media only screen and (max-width: 600px) {
  form {
    margin-top:50px;
    margin-left:0;
    width:100%;
  }
  input{
    width:60vw;
  }
  button{
    width:28vw;
  }
  }

  @media only screen and (device-width: 768px) { 
    display:flex;
    justify-content:center;
    form {
    margin-top:50px;
    margin-left:0;
    width:80%;
    align-items:center;
  }
  input{
    flex: 1;
    height: 54px;
    width:1vw;
    padding: 0 24px;
    border: 0;
    border-radius: 10px 0px 0px 10px;
    color: #3a3a3a;
    border: #3a3a3a;
    border-right: 0;

    font-size:14px;

    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  }

  button{
    font-size:2vw;


    width: 15vw;
    height: 54px;
    background: #9C69E2;

    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0px 20px 20px 0px;

  }
}
  
`;
