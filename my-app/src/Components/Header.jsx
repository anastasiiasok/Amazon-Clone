import React, { Component } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CartIcon from "../Assets/Images/Cart.svg";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

function Header({ cartItems, user, signOut }) {
  const getCount = () => {
    let count = 0;
    // Loop through all cart items
    cartItems.forEach((item) => {
      // add the quantity of the cart item to total;
      count += item.product.quantity;
    });

    return count;
  };

  return (
    <div className="header">
      <div className="header__nav">
        <HeaderLogo>
          <Link to="/">
            <img src={"https://i.imgur.com/7I9Was5.png"} />
          </Link>
        </HeaderLogo>

        <HeaderOptionAddress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Hello</OptionLineOne>
            <OptionLineTwo>Select Your Address</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionAddress>
        <HeaderSearch>
          <HeaderSearchInput type="text" />

          <HeaderSearchIconContainer>
            <SearchIcon />
          </HeaderSearchIconContainer>
        </HeaderSearch>
        <HeaderNavItems>
          <HeaderOption>
            <OptionLineOne>Hello, {user.name}</OptionLineOne>

            <OptionLineTwo>Account & Lists</OptionLineTwo>
          </HeaderOption>
          <OptionLineOne>
            {" "}
            <Link to="/bookmarks">
              <BookmarksIcon fontSize="large" />
            </Link>{" "}
          </OptionLineOne>

          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>

            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>

          <HeaderOptionCart>
            <Link to="/checkout">
              <CartIconContainer src={CartIcon} />

              <CartCount>{getCount()}</CartCount>

              <CartTitle>Cart</CartTitle>
              <Button onClick={signOut}> Sign Out</Button>
            </Link>
          </HeaderOptionCart>
        </HeaderNavItems>
      </div>
    </div>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin-top: auto;
  flex-flow: column nowrap;
  width: 100%;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;

const OptionLineOne = styled.div`
  display: flex;
  align-items: center;
`;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  // TRouBLe
  padding: 10px 9px 10px 9px;
`;

const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  top: 20%;
  left: 32%;
  font-weight: 700;
  color: #febd69;
  margin-top: -30px;
  margin-left: -30px;
  margin-bottom: -18px;
`;

const CartTitle = styled.div`
  padding-left: 20px;
  font-weight: 700;
  margin-top: 20px;
`;
const CartIconContainer = styled.img`
  height: 35px;
`;
const Button = styled.button`
  width: 70px;
  height: 30px;
  margin-left: 10px;

  box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  background: #febd69;
  background-color: #febd69;

  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    background: #f7ca00;
    border-color: #f2c200;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
  }
`;
