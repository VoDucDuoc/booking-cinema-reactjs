import React from 'react';

import './App.scss';
import { BrowserRouter, Switch } from "react-router-dom";
import UserRoute from './components/UserRoute';
import Home from "./pages/Home";
import FilmDetail from './pages/FilmDetail';
import Test from './test';


function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <UserRoute exact path="/" component={Home}/>
        <UserRoute path="/film/:filmId" component={FilmDetail}/>  
    {/* <Test/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
