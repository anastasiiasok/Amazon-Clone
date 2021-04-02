import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
function Cart({ cartItems }) {
  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0px 18px;
  min-height: 100vw;
`;
