import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import CartItem from "./CartItem";
function Cart({ cartItems }) {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.product.quantity;
    });
    return total;
  };

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal getTotalPrice={getTotalPrice()} />
    </Container>
  );
}

export default Cart;

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0px 18px;
  min-height: 100vw;
`;
