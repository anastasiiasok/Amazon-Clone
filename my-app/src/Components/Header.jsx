import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header() {
  return (
    // <div className="header">
    //   <Link to="/">
    //     <img
    //       className="header__logo"
    //       src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
    //     />
    //   </Link>

    //   <div className="header__search">
    //     <input className="header__searchInput" type="text" />
    //     <SearchIcon className="header__searchIcon" />
    //   </div>

    //   <div className="header__nav">
    //     <div className="header__option">
    //       <span className="header__optionLineOne">Hello Guest</span>
    //       <span className="header__optionLineTwo">Sign In</span>
    //     </div>

    //     <div className="header__option">
    //       <span className="header__optionLineOne">Returns</span>
    //       <span className="header__optionLineTwo">& Orders</span>
    //     </div>

    //     <div className="header__option">
    //       <span className="header__optionLineOne">Your</span>
    //       <span className="header__optionLineTwo">Prime</span>
    //     </div>

    //     <Link to="/checkout">
    //       <div className="header__optionBasket">
    //         <ShoppingBasketIcon />
    //       </div>
    //     </Link>
    //   </div>
    // </div>

    <Container>
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
          <OptionLineOne>Hello, Anastasia</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon />
            <CartCount>4</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
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

const OptionLineOne = styled.div``;

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
  padding-left: 4px;
`;
