import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/Frame1.svg';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;

}
body{
  background:#F7FBFD url(${githubBackground}) no-repeat 100% bottom;
  -webkit-font-smoothing: antialiased;
  height:100vh;
  display:flex;
}
body,input,button{
  font-family: 'Nunito', sans-serif;
}
button{
cursor:pointer
}
#root{
  max-width:960px;
  
  padding: 10px 20px;
}
`;