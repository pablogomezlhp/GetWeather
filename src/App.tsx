import React from 'react';
import Routes from './routes'

import GlobalStyle from './styles/styles';

import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes /> 
    </BrowserRouter>
    <GlobalStyle />
    </>
    
  );
}

export default App;
