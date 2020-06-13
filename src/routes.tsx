import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Home from '../src/pages/Home';
import Results from '../src/pages/Results';


const Routes:React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/results/:city+" exact component={Results}/>
  </Switch>
);

export default Routes;