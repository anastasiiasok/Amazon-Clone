import React from "react";
import CartTotal from "./CartTotal";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import CartItem from "./CartItem";
import { CardElement } from "@stripe/react-stripe-js";
import "./Payment.css";
import { useHistory } from "react-router";
function Payment({ getTotalPrice, getCount }) {
  const history = useHistory();
  return (
    <div>
      <PriceContainer>
        <h3> Proceed with card payment</h3>
        Subtotal ({getCount} items):
        <NumberFormat
          value={getTotalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </PriceContainer>

      <Title>
        <label for="cname">Name on Card</label>
        <input
          type="text"
          id="cname"
          name="cardname"
          placeholder="John More Doe"
        />

        <label for="ccnum">Credit card number</label>
        <input
          type="text"
          id="ccnum"
          name="cardnumber"
          placeholder="1111-2222-3333-4444"
        />
        <label for="ccnum">Exp date</label>
        <input type="text" id="ccnum" name="cardnumber" placeholder="12/23" />
        <label for="ccnum">CVV Code</label>
        <input type="text" id="ccnum" name="cardnumber" placeholder="345" />
      </Title>
      <PriceContainer>
        <h3>Delivery</h3>
        <p> Free Amazon Day Delivery</p>
        <p> Items shipped from Amazonclone.com</p>
      </PriceContainer>
      <PayButton>
        <button onClick={(e) => history.push("/")}>Place your order</button>
      </PayButton>
    </div>
  );
}

export default Payment;
const PriceContainer = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;
const PayButton = styled.div`
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;
