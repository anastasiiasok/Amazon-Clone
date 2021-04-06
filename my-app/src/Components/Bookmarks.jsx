import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Bookmarks({ product, id }) {
  return (
    <>
      <Container>
        <p>Your favorite items check them out anytime you wish</p>
        <Link to="/">
          <Button path="/">Back to shopping</Button>
        </Link>
      </Container>
    </>
  );
}

export default Bookmarks;
const Container = styled.div`
  background-color: white;

  padding: 20px;
  margin: 10px;

  width: 650px;
  min-height: 40vw;
`;
const Button = styled.button`
  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  background: #ffd814;
  background-color: #fcd200;
  padding: 10px;
  width: 300px;

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
