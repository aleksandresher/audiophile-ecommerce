import styled from "styled-components";
import cart from "../Images/Cart.png";
import header from "../Images/header.png";
import { useContext, useState } from "react";
import UserStore from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../features/UiSlice";

function NavBar() {
  const { value, setValue } = useContext(UserStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function ToCategory(category) {
    navigate(`/${category}`);
    setValue({ category });
  }

  return (
    <NavBarContainer>
      <NavigationWrapper>
        <HeaderImg src={header} />
        <BtnContainer>
          <NavBtn onClick={() => navigate("/")}>HOME</NavBtn>
          <NavBtn onClick={() => ToCategory("headphones")}>HEADPHONES</NavBtn>
          <NavBtn onClick={() => ToCategory("speakers")}>SPEAKERS</NavBtn>
          <NavBtn onClick={() => ToCategory("earphones")}>EARPHONES</NavBtn>
        </BtnContainer>
        <CartImg src={cart} onClick={() => dispatch(toggle())} />
      </NavigationWrapper>
    </NavBarContainer>
  );
}
export default NavBar;

const NavBarContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  z-index: 100;
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;
  border-bottom: 1px solid #979797;
  height: 96px;
`;

const HeaderImg = styled.img`
  width: 143px;
  height: 25px;
`;
const BtnContainer = styled.nav`
  display: flex;
  gap: 34px;
`;
const NavBtn = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  font-size: 13px;
  letter-spacing: 2px;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
  }
`;
const CartImg = styled.img`
  width: 23px;
  height: 20px;
`;
