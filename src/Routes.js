import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";

const Routes = () => (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/"/>
            <Route exact path="/register"/>
            <Route exact path="/dashboard"/>
        </Switch>
    </Router>
);

export default Routes;