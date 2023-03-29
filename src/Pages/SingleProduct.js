import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import data from "../data.json";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import UserStore from "../context/Context";
import Footer from "../components/Footer";
import ThreeProduct from "../components/ThreeProduct";
import AboutCompany from "../components/AboutCompany";
import Cart from "../components/Cart";
import { useDispatch } from "react-redux";

function SingleProduct() {
  const { value, setValue } = useContext(UserStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [items, setItems] = useState();
  console.log(items);

  useEffect(() => {
    setItems(
      data.filter((item) => {
        return item.category === value.category;
      })
    );
  }, [value]);

  function goToProduct(id, item) {
    setValue({ id: id, item: item });
    navigate(`/${id}`);
  }

  return (
    <SinglePageContainer>
      <CategoryContainer>
        <Heading>
          <NavBar />
          <CategoryName>{value.category}</CategoryName>
        </Heading>

        {items?.map((item, index) => (
          <ItemContainer key={item.id} position={index}>
            <ImageContainer>
              <ItemImg src={process.env.PUBLIC_URL + item.image.desktop} />
            </ImageContainer>
            <DescriptionContainer>
              <NameP>{item.name}</NameP>

              <DescriptionP>{item.description}</DescriptionP>
              <SeeBtn onClick={() => goToProduct(item.id, item)}>
                see product
              </SeeBtn>
            </DescriptionContainer>
          </ItemContainer>
        ))}
      </CategoryContainer>
      <ThreeProduct />

      <AboutCompany />
      <Footer />
      <Cart />
    </SinglePageContainer>
  );
}
export default SingleProduct;

const SinglePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 160px;
`;

const Heading = styled.div`
  height: 336px;
  background-color: #000;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: ${(props) =>
    (props.position + 1) % 2 !== 0 ? "row" : "row-reverse"};
  align-items: center;
  gap: 125px;
`;

const ImageContainer = styled.div``;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 445px;
`;

const NameP = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #000;
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
  color: #000;
  margin-top: 32px;
  margin-bottom: 40px;
`;

const CategoryName = styled.p`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  margin-top: 98px;
  align-self: center;
`;
const ItemImg = styled.img`
  width: 540px;
  height: 560px;
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
