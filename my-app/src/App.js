import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <div className="app">
          <Header />

          <Switch>
            <Route path="/checkout">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
