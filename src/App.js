import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserFromLocal } from "./actions/userAction";
import "./App.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserRoute from "./components/UserRoute";
import Home from "./pages/Home";
import FilmDetail from "./pages/FilmDetail";
import Test from "./test";
import Login from "./pages/Login";

import Checkout from "./pages/CheckOut";
import Customer from "./pages/Customer";
import AdminLogin from "./pages/Admin/AdminLogin";
import Admin from "./pages/Admin/Admin";

function App() {
  const dispatch = useDispatch();

  const getUser = () => {
    const userLocal = localStorage.getItem("user");
    if (userLocal) {
      dispatch(getUserFromLocal(JSON.parse(userLocal)));
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <UserRoute exact path="/" component={Home} />
        <UserRoute path="/film/:filmId" component={FilmDetail} />
        <Route path="/login" component={Login} />
        <Route path="/checkout/:scheduleId" component={Checkout} />
        <UserRoute path="/customer" component={Customer} />
        <Route path="/private/login" component={AdminLogin} />
        <Route path="/private/home" component={Admin} />
        {/* <Test/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
