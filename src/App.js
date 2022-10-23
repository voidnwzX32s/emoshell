import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

import home from './pages/home/home';
import markit from './pages/mapmarkit/mapmarkit';
import login from './pages/loginpage/login';

function App() {
  return (
    <>
     <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/login" component={login} />
      <Route exact path="/markit" component={markit} />
      <Redirect to="/" />
     </Switch>
    </>
  );
}

export default App;
