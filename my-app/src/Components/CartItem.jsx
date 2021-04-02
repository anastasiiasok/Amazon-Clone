import React from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
function CartItem({}) {
  return (
    <div>
      <Container>
        <ImageContainer>
          <img src="./product1.png" />
        </ImageContainer>

        <CartItemInfo>
          <CartItemInfoTop>
            <h2>item.name</h2>
            <DetailsContainer>
              <div>In Stock</div>
              <PrimeContainer>
                <CheckIcon color="inherit" />
                <Prime>
                  prime <span>& FREE Returns</span>
                </Prime>
              </PrimeContainer>
              <GiftContainer>
                <Checkbox>
                  <input type="checkbox" />
                </Checkbox>
                <GiftText>This order contains a gift</GiftText>
              </GiftContainer>
              return (
              <ProductDetailsContainer>
                <ProductDetails>details description</ProductDetails>
              </ProductDetailsContainer>
            </DetailsContainer>
          </CartItemInfoTop>
          <CartItemInfoBottom>
            <CartItemQuantityContainer>
              <select></select>
            </CartItemQuantityContainer>
            <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
          </CartItemInfoBottom>
        </CartItemInfo>

        <CartItemPrice>
          <PriceContainer>
            <Price></Price>

            <SalePrice>$24.99</SalePrice>
          </PriceContainer>
          <PrimeShippingContainer>
            Free Delivery<PrimeShippingDate></PrimeShippingDate>
          </PrimeShippingContainer>
        </CartItemPrice>
      </Container>
    </div>
  );
}

export default CartItem;
const Container = styled.div`
  padding: 12px 0px;
  display: flex;
  border-bottom: 1ps solid #ddd;
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const CartItemInfo = styled.div`
  flex-grow: 1;
`;

const CartItemInfoTop = styled.div`
  color: #007185;
  h2 {
    font-size: 18px;
  }
`;

const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;

const CartItemQuantityContainer = styled.div`
  select {
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
    :focus {
      outline: none;
    }
  }
`;

const CartItemDeleteContainer = styled.button`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
  border-radius: 7px;
  background-color: #f0f2f2;
  padding: 8px;
  box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
  :focus {
    outline: none;
  }
`;

const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
  text-decoration: line-through;
`;

const SalePrice = styled.span`
  color: red;
  font-weight: 500;
  padding-left: 8px;
`;

const PriceContainer = styled.div``;

const PrimeContainer = styled.div`
  display: flex;
  color: #f0c14b;
`;

const Prime = styled.div`
  color: #00a8e1;
  font-weight: 700;
  span {
    color: black;
  }
`;

const ShippingDate = styled.div``;

const PrimeShippingContainer = styled.div`
  display: flex;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  min-width: 1px;
`;

const PrimeShippingDate = styled.div`
  color: #595855;
  font-weight: 500;
  margin-left: 4px;
`;

const DetailsContainer = styled.div`
  color: black;
`;

const GiftContainer = styled.div`
  display: flex;
`;

const Checkbox = styled.div``;

const GiftText = styled.div`
  margin-left: 8px;
`;
const ProductDetailsContainer = styled.div`
  display: flex;
`;

const ProductDetails = styled.div`
  margin-left: 5px;
  font-weight: 700;
`;
