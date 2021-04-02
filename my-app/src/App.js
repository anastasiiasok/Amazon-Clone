import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

import { useState, useEffect } from "react";
import { db } from "./firebase";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));

      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);
  console.log(cartItems);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <div className="app">
          <Header />

          <Switch>
            <Route path="/checkout">
              <Cart cartItems={cartItems} />
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
