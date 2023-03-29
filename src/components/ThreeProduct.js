import styled from "styled-components";
// import Headphones from ;
import { useNavigate } from "react-router-dom";
import UserStore from "../context/Context";
import { useContext } from "react";

function ThreeProduct() {
  const { value, setValue } = useContext(UserStore);
  const navigate = useNavigate();
  function ToCategory(category) {
    navigate(`/${category}`);
    setValue({ category });
  }
  return (
    <MainContainer>
      <WrapperContainer>
        <ProductImage
          src={
            process.env.PUBLIC_URL +
            "/assets/shared/desktop/image-category-thumbnail-headphones.png"
          }
        />
        <Name>headphones</Name>
        <Btns>
          <ShopBtn>
            <ShopText onClick={() => ToCategory("headphones")}>shop</ShopText>
            <Arrow></Arrow>
          </ShopBtn>
        </Btns>
      </WrapperContainer>
      <WrapperContainer>
        <ProductImage
          src={
            process.env.PUBLIC_URL +
            "/assets/shared/desktop/image-category-thumbnail-speakers.png"
          }
        />
        <Name>speakers</Name>
        <Btns>
          <ShopBtn>
            <ShopText onClick={() => ToCategory("speakers")}>shop</ShopText>
            <Arrow></Arrow>
          </ShopBtn>
        </Btns>
      </WrapperContainer>
      <WrapperContainer>
        <ProductImage
          src={
            process.env.PUBLIC_URL +
            "/assets/shared/desktop/image-category-thumbnail-earphones.png"
          }
        />
        <Name>earphones</Name>
        <Btns>
          <ShopBtn>
            <ShopText onClick={() => ToCategory("earphones")}>shop</ShopText>
            <Arrow></Arrow>
          </ShopBtn>
        </Btns>
      </WrapperContainer>
    </MainContainer>
  );
}
export default ThreeProduct;

const MainContainer = styled.div`
  display: flex;
  align-self: center;
  gap: 30px;
  margin-left: 165px;
  margin-right: 165px;
  margin-top: 180px;
  margin-bottom: 160px;
`;

const Arrow = styled.div`
  display: block;
  margin: 30px auto;
  width: 10px;
  height: 10px;
  border-top: 2px solid #d87d4a;
  border-left: 2px solid #d87d4a;
  transform: rotate(135deg);
`;

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: #f1f1f1;
  border-radius: 8px;
  width: 350px;
  height: 204px;
  position: relative;
`;
const Name = styled.p`
  position: absolute;
  top: 100px;
  left: 130px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  letter-spacing: 1.28px;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
`;

const ProductImage = styled.img`
  width: 123px;
  height: 140px;
  position: absolute;
  background-color: none;
  bottom: 100px;
  left: 112px;
`;
const ShopBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 13px;
  border: none;
  background-color: inherit;
`;

const Btns = styled.div`
  display: flex;
  position: absolute;

  top: 140px;
  left: 150px;
  border: none;
`;
const ShopText = styled.p`
  font-size: 13px;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.5;
  font-family: "Manrope", sans-serif;
`;
