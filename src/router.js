import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "Pages/Home";
import PageForm from "Pages/Form";
import Edit from "./components/Edit/Edit";
import User from "./components/ViewUser/User";
import LoginUser from "components/CadastrarUsuario";
import Chart from "./components/Grafico";
const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/PageForm' component={PageForm} />
        <Route path='/users/edit/:id' component={Edit} />
        <Route path='/users/:id' component={User} />
        <Route path='/cadastrar' exact component={LoginUser} />
        <Route path='/grafico' exact component={Chart} />
      </Switch>
    </Router>
  );
};

export default Root;
