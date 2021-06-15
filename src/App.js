import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'

export default function App() {
  return (
    <Router>
      <div>  
        <Switch>
          <Route path="/checkout">
           <Checkout/>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
           <Header/>
           <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


