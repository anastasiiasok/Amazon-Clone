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

function App() {
  const [cartItems, setCartItems] = useState([]);
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
            <Route path="/checkout">
              <Cart cartItems={cartItems} />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Container>
      )}
    </Router>
  );
}

export default App;
const Container = styled.div`
  background-color: #eaeded;
`;
