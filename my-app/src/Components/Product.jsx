import React from "react";
import styled from "styled-components";

function Product() {
  return (
    <Container>
      <Title>
        <strong>One Hand Gaming Keyboard and Mouse Combo, 39 Keys </strong>
      </Title>

      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Price>$22.99</Price>
      <Image src="product1.png" />
      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  flex: 100px;
  padding: 20px;
  margin: 10px;
  margin-left: 550px;
  max-height: 400px;
  width: 250px;
  flex-direction: column;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-items: center;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
`;
