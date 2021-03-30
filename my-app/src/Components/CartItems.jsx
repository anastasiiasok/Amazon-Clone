import React from "react";
import styled from "styled-components";
import WarningIcon from "@material-ui/icons/Warning";
function CartItems() {
  return (
    <div>
      <Container>
        <MessageContainer>
          <Important>
            <WarningIcon fontSize="large" />
          </Important>
          <ImportantDetails>
            <ImportantMessage>
              Important messages about items in you Cart:
            </ImportantMessage>
            <ImportantTitle>
              1 item in your Cart has changed price.
            </ImportantTitle>
            <ImportantDescription>
              Items in your Shopping Cart will always reflect the most recent
              price displayed on their product detail pages.
            </ImportantDescription>
            <ul>
              <li>
                <ImportantItemContainer>
                  <ImportantItem></ImportantItem>
                  <ImportantItemDescription>
                    has increased from $ <RedPrice></RedPrice>
                    <ImportantItemDescription>to</ImportantItemDescription>
                    <RedPrice></RedPrice>
                  </ImportantItemDescription>
                </ImportantItemContainer>
              </li>
            </ul>
          </ImportantDetails>
        </MessageContainer>
      </Container>
    </div>
  );
}

export default CartItems;
const Container = styled.div`
  flex: 0.8;
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 35px;
`;

const ItemsContainer = styled.div``;

const MessageContainer = styled.div`
  display: flex;
  background-color: white;
  margin-right: 18px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 3px solid #fcd200;
`;

const CartContainer = styled.div`
  background-color: white;
  margin-right: 18px;
  padding: 20px;
  border-radius: 8px;
`;

const Important = styled.div`
  color: #fcd200;
  margin-right: 20px;
`;

const ImportantDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ImportantMessage = styled.div`
  color: #fcd200;
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 10px;
`;

const ImportantTitle = styled.div`
  font-weight: 500;
`;

const ImportantDescription = styled.div``;

const ImportantItemContainer = styled.div`
  display: flex;
`;

const ImportantItem = styled.div`
  display: flex;
  font-size: 15px;
  color: #2596be;
`;

const ImportantItemDescription = styled.div`
  display: flex;
  font-size: 14px;
  margin-left: 3px;
  align-items: center;
`;

const RedPrice = styled.div`
  margin-left: 3px;
  color: red;
`;

const EmptyCartContainer = styled.div``;
