// import React from 'react'
import styled from "styled-components";
import { db } from "../firebase";

function Product({ product, id }) {
  const addToCart = () => {
    console.log(id);
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      console.log(doc);
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: product.title,
          image: product.image,
          price: product.price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{product.title}</Title>
      <PriceContainer>
        <Price>Price: ${product.price}</Price>
      </PriceContainer>

      <RatingContainer>
        <Rating>Ratings: {product.ratings} ⭐⭐⭐⭐⭐</Rating>
      </RatingContainer>
      <ProductDetailsContainer>Brand: {product.brand} </ProductDetailsContainer>
      <Image src={product.image} />
      <ActionSection>
        <Button onClick={addToCart}>Add to Cart</Button>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  flex: 1;
  padding-left: 10px;
  height: 400px;
  margin: 10px;
  display: flex;
  z-index: 100;
  width: 230px;
  flex-direction: column;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RatingContainer = styled.div`
  display: flex;
`;
const Title = styled.span`
  font-weight: 650;
`;
const Price = styled.span`
  font-weight: 600;
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
const Button = styled.button`
  width: 100px;
  height: 30px;

  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  background: #ffd814;
  background-color: #fcd200;

  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    background: #f7ca00;
    border-color: #f2c200;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  }
`;
