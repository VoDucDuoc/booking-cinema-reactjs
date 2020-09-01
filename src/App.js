import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import UserRoute from './components/UserRoute';
import Home from "./pages/Home";
import FilmDetail from './pages/FilmDetail';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <UserRoute exact path="/" component={Home}/>
        <UserRoute path="/film/:id" component={FilmDetail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
