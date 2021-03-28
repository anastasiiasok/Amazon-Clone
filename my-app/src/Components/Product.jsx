import React from "react";
import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <Container>
      <Title>
        <strong> {product.title} </strong>
      </Title>
      <PriceContainer>
        <Price>Price: {product.salePrice}</Price>
      </PriceContainer>
      <image src={product.image} />
      <RatingContainer>
        <Rating>Ratings: {product.ratings} ⭐⭐⭐</Rating>
      </RatingContainer>
      <ProductDetailsContainer>Brand: {product.brand} </ProductDetailsContainer>
      <Image src={product.image} />

      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};
// function Product() {
//   return (

// <Container>
//   <Title>
//     <strong>One Hand Gaming Keyboard and Mouse Combo, 39 Keys </strong>
//   </Title>

//   <Rating>⭐⭐⭐⭐⭐</Rating>
//   <Price>$22.99</Price>
//   <Image src="product1.png" />

// </Container>
//   );
// }

export default Product;

const Container = styled.div`
  background-color: white;
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  z-index: 100;
  width: 250px;
  flex-direction: column;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RatingContainer = styled.div`
  display: flex;
`;
const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const SalesPrice = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const ProductDetailsContainer = styled.div`
  display: flex;
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
