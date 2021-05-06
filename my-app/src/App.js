import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import Login from "./Components/Login";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Payment from "./Components/Payment";

const promise = loadStripe(
  "pk_test_51IdfomE4vAC1bXa5yVQMvteigw4ALaz8FZaZHPMGoXi1tyaW6caanBTJCIjw96OB1ZJzCI1V2EgN1A4K5hTvBjvI00svVDRDd"
);
function App() {
  const [cartItems, setCartItems] = useState([]);
  // regular signin

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));

      setCartItems(tempItems);
    });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);
  console.log(cartItems);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header signOut={signOut} user={user} cartItems={cartItems} />

          <Switch>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/checkout">
              <Cart cartItems={cartItems} />
              <Elements stripe={promise}></Elements>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          {/* <Footer /> */}
        </Container>
      )}
    </Router>
  );
}

export default App;
const Container = styled.div`
  background-color: #eaeded;
`;
