import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { useHistory } from "react-router";

function CartTotal({ getTotalPrice, getCount }) {
  const history = useHistory();
  return (
    <div>
      <Container>
        <TotalContainer>
          <PriceContainer>
            <Title>
              Subtotal ({getCount} items):{" "}
              <NumberFormat
                value={getTotalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </Title>
          </PriceContainer>
        </TotalContainer>
        <GiftContainer>
          <GiftText>Price displayed with Free Delivery</GiftText>
        </GiftContainer>

        <Button onClick={(e) => history.push("/payment")}>
          Proceed to checkout
        </Button>
      </Container>
    </div>
  );
}

export default CartTotal;

const Container = styled.div`
  height: 120px;
  background-color: white;
  margin-right: 18px;
  padding: 20px;

  flex-direction: column;
`;

const TotalContainer = styled.div`
  display: flex;
`;

const GiftContainer = styled.div`
  display: flex;
`;

const Checkbox = styled.div``;

const GiftText = styled.div`
  margin-left: 8px;
  font-size: 18px;
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-size: 20px;
`;

const PriceContainer = styled.div`
  margin-left: 8px;
  font-weight: 700;
  font-size: 20px;
`;

const Button = styled.button`
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  background: #ffd814;
  background-color: #fcd200;
  padding: 10px;

  margin: 20px 0px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    background: #f7ca00;
    border-color: #f2c200;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  }
`;
