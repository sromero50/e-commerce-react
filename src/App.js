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
import EditProduct from "./pages/ABMProducto/EditProduct";
import AuthProvider from "./Context/authProvider";
import Footer from "./components/footer";
function App() {

  return <Router>
            <AuthProvider>
              <Menu />
            <Switch>
            <Route path="/register/">
                <Register />
              </Route>
              <Route path="/login/">
                <Login />
              </Route>
              <Route path="/checkout/:id">
                <Checkout />
              </Route>
              <Route path="/products/alta/">
                <AltaProducto />
              </Route>
              <Route path="/products/edit/:id">
                <EditProduct />
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
            <Footer />
            </AuthProvider>
        </Router>

}

export default App;
