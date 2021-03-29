import React from "react";
import "./Home.css";
import Product from "./Product";
import styled from "styled-components";
import { Products } from "../Components/Data/Products";
import { db } from "../firebase";
function Home() {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        {Products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </Content>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDRiMzY4NTIt/NDRiMzY4NTIt-YTI0MDc5OWMt-w1500._CB659183649_.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -300px;
  display: flex;
  width: 250px;
`;
