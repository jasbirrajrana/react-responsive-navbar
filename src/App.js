import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import IndexPage from "./pages/index";
import ProductsPage from "./pages/products";
import ContactPage from "./pages/contact";
import SignupPage from "./pages/signup";

import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/products" component={ProductsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
};

export default App;
