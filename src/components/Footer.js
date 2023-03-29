import styled from "styled-components";
import header from "../Images/header.png";
import fbIcon from "../Images/fb.png";
import twIcon from "../Images/tw.png";
import instIcon from "../Images/inst.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserStore from "../context/Context";

function Footer() {
  const { value, setValue } = useContext(UserStore);
  const navigate = useNavigate();

  function ToCategory(category) {
    navigate(`/${category}`);
    setValue({ category });
  }
  return (
    <WrapperContainer>
      <FooterContainer>
        <NavBarContainer>
          <HeaderImg src={header} />
          <BtnContainer>
            <NavBtn onClick={() => navigate("/")}>HOME</NavBtn>
            <NavBtn onClick={() => ToCategory("headphones")}>HEADPHONES</NavBtn>
            <NavBtn onClick={() => ToCategory("speakers")}>SPEAKERS</NavBtn>
            <NavBtn onClick={() => ToCategory("earphones")}>EARPHONES</NavBtn>
          </BtnContainer>
        </NavBarContainer>
        <SecondContainer>
          <TextContainer>
            <FooterText>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </FooterText>
          </TextContainer>
          <IconsContainer>
            <IconImg src={fbIcon} />
            <IconImg src={twIcon} />
            <IconImg src={instIcon} />
          </IconsContainer>
        </SecondContainer>
        <CRContainer>
          <CRText>Copyright 2021. All Rights Reserved</CRText>
        </CRContainer>
      </FooterContainer>
    </WrapperContainer>
  );
}
export default Footer;

const WrapperContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #000;
  justify-content: center;
`;

const FooterContainer = styled.div`
  display: flex;

  align-self: center;
  flex-direction: column;
  background-color: #000;
`;

const SecondContainer = styled.div`
  display: flex;
  max-width: 1110px;
  margin-left: 165px;
  margin-right: 165px;
`;

const NavBarContainer = styled.div`
  display: flex;
  width: 1110px;
  height: 96px;
  align-items: center;
  justify-content: space-between;
  margin-left: 165px;
  margin-right: 165px;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-end;
  justify-content: flex-end;
  width: 570px;
`;
const CRContainer = styled.div`
  display: flex;
  width: 1110px;
  margin-top: 56px;
  margin-left: 156px;
  justify-content: flex-start;
`;
const CRText = styled.p`
  font-size: 15px;
  color: #fff;
  font-weight: 700;
  font-family: "Manrope", sans-serif;
  opacity: 0.5;
`;
const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;
const TextContainer = styled.div`
  width: 540px;
  height: 100px;
  text-align: justify;
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
const FooterText = styled.p`
  width: 540px;
  font-size: 15px;
  font-family: "Manrope", sans-serif;
  opacity: 0.5;
  font-weight: 500;
  color: #fff;
`;
