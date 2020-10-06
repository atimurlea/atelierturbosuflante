import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import ProductListComponent from "./components/ProductListComponent";
import ProductDetailComponent from "./components/ProductDetailComponent";
import ContactComponent from "./components/ContactComponent";
import LoginComponent from "./components/LoginComponent";
import MenuComponent from "./components/MenuComponent";

function App() {
  return (
      <div>
          <BrowserRouter>
              <MenuComponent/>
              <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/home"/>
                )}/>
                <Route path="/home">
                    <HomeComponent />
                </Route>
                <Route path="/products">
                    <ProductListComponent />
                </Route>
                <Route path="/product/:id">
                    <ProductDetailComponent />
                </Route>
                <Route path="/contact">
                    <ContactComponent />
                </Route>
                <Route path="/login">
                    <LoginComponent />
                </Route>
            </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
