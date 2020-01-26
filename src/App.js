import React, { useState} from 'react';
import './App.css';
import {AUTH_TOKEN} from './authtoken.js';
import {Redirect, Route, Switch} from "react-router";
import PrivateRoute from "./Components/privateRoute";
import MainPage from "./Components/Pages/MainPage";
import Login from "./Components/Pages/LoginPage";
import AppHeader from "./Components/Header";

const App = () => {

  let [token, updateToken] = useState(localStorage.getItem(AUTH_TOKEN))

  const login = (newToken) => {
    localStorage.setItem(AUTH_TOKEN, newToken);
    updateToken(localStorage.getItem(AUTH_TOKEN));
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    updateToken(localStorage.getItem(AUTH_TOKEN));
  };

  return (
    <div>
      <Redirect from="/" to="" />
      <Switch>
        <Route exact path='/login'>
          <Login login={login}/>
        </Route>
        <PrivateRoute path="" token={token}>
          <AppHeader token={token} logout={logout}/>
          <MainPage/>
        </PrivateRoute>
      </Switch>
    </div>
  )};

export default App;
