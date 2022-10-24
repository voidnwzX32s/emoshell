import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Register from './pages/register/register';
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
      <Route exact path="/register" component={Register} />
      <Redirect to="/" />
     </Switch>
    </>
  );
}

export default App;
