import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./components/Navbar";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import { AltaProducto } from "./pages/ABMProducto/AltaProducto";
function App() {

  return <Router>
              <Menu />
            <Switch>
            <Route path="/register/">
                <Register />
              </Route>
              <Route path="/login/">
                <Login />
              </Route>
              <Route path="/products/alta/">
                <AltaProducto />
              </Route>
              <Route path="/products/:id">
                <SingleProduct />
              </Route>
              <Route path="/checkout/:id">
                <Checkout />
              </Route>
              <Redirect path="/home" to="/" />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>

}

export default App;
