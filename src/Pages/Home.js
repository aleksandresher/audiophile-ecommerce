import NavBar from "../components/NavBar";
import styled from "styled-components";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import AboutCompany from "../components/AboutCompany";
import { useContext, useEffect, useState } from "react";
import UserStore from "../context/Context";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import ThreeProduct from "../components/ThreeProduct";
import HomeImage from "../Images/image-hero.jpg";
import HomePageAdd from "../components/HomePageAdd";

function Home() {
  const { value, setValue } = useContext(UserStore);
  const [items, setItems] = useState();
  console.log(items);

  const navigate = useNavigate();
  function goToProduct(id, item) {
    setValue({ id: id, item: item });
    navigate(`/${id}`);
  }
  useEffect(() => {
    setItems(
      data.filter((item) => {
        return item.id === 4;
      })
    );
  }, []);
  return (
    <Add>
      <HomePageContainer>
        <NavBar />
        <ItemContainer>
          <DescriptionContainer>
            <NameP>XX99 Mark II Headphones</NameP>

            <DescriptionP>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </DescriptionP>
            <SeeBtn onClick={() => goToProduct(items.id, items)}>
              see product
            </SeeBtn>
          </DescriptionContainer>
          <ImageContainer>
            <ItemImg src={HomeImage} />
          </ImageContainer>
        </ItemContainer>
      </HomePageContainer>
      <HomePageAdd />
      <ThreeProduct />
      <AboutCompany />
      <Footer />

      <Cart />
    </Add>
  );
}
export default Home;

const Add = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomePageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 770px;
  background-color: #000;
  flex-direction: column;
`;
const ItemContainer = styled.div`
  display: flex;
  padding-left: 200px;
  align-items: center;
`;
const ImageContainer = styled.div`
  padding-top: 100px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  width: 445px;
  z-index: 30;
`;

const NameP = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.42px;
  font-family: "Manrope", sans-serif;
  margin: 0px;
`;
const DescriptionP = styled.p`
  text-align: justify;
  font-size: 15px;
  font-weight: 500;
  font-family: "Manrope", sans-serif;
  opacity: 0.5;
  color: #fff;
  margin-top: 32px;
  margin-bottom: 40px;
`;

const ItemImg = styled.img`
  opacity: 0.1;
  z-index: 20;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0px;
`;

const SeeBtn = styled.button`
  width: 160px;
  height: 48px;
  background-color: #d87d4a;
  border: none;
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: "Manrope", sans-serif;
  cursor: pointer;
`;
