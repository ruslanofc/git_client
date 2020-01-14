//import React, { useState, Component } from 'react';
import './App.css';
// import {AUTH_TOKEN} from './authtoken.js';
// import {Redirect, Route, Switch} from "react-router";
// import PrivateRoute from "./Components/privateRoute";
// import MainPage from "./Components/MainPage";
// import Login from "./Components/LoginPage";
//import AppHeader from "./Components/Header";
import React from 'react';
//import MainPage from "./Components/MainPage";
import LoginPage from "./Components/LoginPage";

// const App = () => {

//   let [token, updateToken] = useState(localStorage.getItem(AUTH_TOKEN))

//   const login = (newToken) => {
//     localStorage.setItem(AUTH_TOKEN, newToken);
//     updateToken(localStorage.getItem(AUTH_TOKEN));
//   };

//   const logout = () => {
//     localStorage.removeItem(AUTH_TOKEN);
//     updateToken(localStorage.getItem(AUTH_TOKEN));
//   };

//   return (
//     <div>
//       <Redirect from="/" to="" />
//       <Switch>
//         <Route exact path='/login'>
//           <Login login={login}/>
//         </Route>
//         <PrivateRoute path="" token={token}>
//           <AppHeader token={token} logout={logout}/>
//           <MainPage/>
//         </PrivateRoute>
//       </Switch>
//     </div>
//   )};

function App() {
  return (
    <div>
      <LoginPage/>
    </div>
  )
}

export default App;
