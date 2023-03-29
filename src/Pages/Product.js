import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import UserStore from "../context/Context";
import NavBar from "../components/NavBar";
import data from "../data.json";
import ThreeProduct from "../components/ThreeProduct";
import Footer from "../components/Footer";
import AboutCompany from "../components/AboutCompany";
import { useDispatch } from "react-redux";
import { AddProduct } from "../features/CartSlice";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";

function Product() {
  const dispatch = useDispatch();
  const { value, setValue } = useContext(UserStore);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(value.item);
  console.log(item);
  const [otherItems, setOtherItems] = useState(value.item.others);

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }

  useEffect(() => {
    const newObject = {
      ...item,
      quantity: count,
    };
    setItem(newObject);
  }, [count]);

  function GoToCart(item) {
    dispatch(AddProduct(item));
  }

  function goToProduct(Itemslug) {
    const newItem = data.filter((item) => {
      return item.slug === Itemslug;
    });
    setItem(...newItem);
    setValue({ id: newItem.id, item: newItem });
    navigate(`/${newItem.id}`);
  }

  // function goToProduct(id, item) {
  //   setValue({ id: id, item: item });
  //   navigate(`/${id}`);
  // }

  return (
    <SingleItemContainer>
      {item ? (
        <ProductContainer>
          <NavBar />

          <ImageAndGeneral>
            <div>
              <ProductImage
                src={process.env.PUBLIC_URL + item?.image?.desktop}
              />
            </div>
            <GenInfo>
              <ItemName>{item.name}</ItemName>
              <ItemDescription>{item.description}</ItemDescription>
              <ItemPrice>$ {item.price}</ItemPrice>

              <BtnContainer>
                <IncreaseDecreaseContainer>
                  <QuantityBtn
                    disabled={count === 1}
                    onClick={() => decreaseCount()}
                  >
                    -
                  </QuantityBtn>
                  <p>{count}</p>
                  <QuantityBtn onClick={() => increaseCount()}>+</QuantityBtn>
                </IncreaseDecreaseContainer>
                <AddCartBtn onClick={() => GoToCart(item)}>
                  add to cart
                </AddCartBtn>
              </BtnContainer>
            </GenInfo>
          </ImageAndGeneral>

          <MoreInfoContainer>
            <FeatureContainer>
              <MoreInfoHeading>Features</MoreInfoHeading>
              <FeatureText>{item.features}</FeatureText>
            </FeatureContainer>

            <IncludesContainer>
              <MoreInfoHeading>In the box</MoreInfoHeading>
              {item
                ? item?.includes.map(({ quantity, item, idx }) => (
                    <QuantityContainer key={idx}>
                      <Quantity key={idx}>{quantity}x</Quantity>
                      <Name key={idx}>{item}</Name>
                    </QuantityContainer>
                  ))
                : ""}
            </IncludesContainer>
          </MoreInfoContainer>
          <GalleryImageContainer>
            <SmallImageContainer>
              <img src={process.env.PUBLIC_URL + item?.gallery.first.desktop} />
              <img
                src={process.env.PUBLIC_URL + item?.gallery.second.desktop}
              />
            </SmallImageContainer>
            <img src={process.env.PUBLIC_URL + item?.gallery.third.desktop} />
          </GalleryImageContainer>
          <SuggestionHeader>you may also like</SuggestionHeader>
          <div>
            <OtherImageContainer>
              {otherItems?.map(({ image, name, slug, idx, id }) => (
                <SingleProductContainer key={idx}>
                  <OtherImage
                    key={idx}
                    src={process.env.PUBLIC_URL + image.desktop}
                  />
                  <NameP key={idx}>{name}</NameP>
                  <SeeBtn onClick={() => goToProduct(slug)}>See product</SeeBtn>
                </SingleProductContainer>
              ))}
            </OtherImageContainer>
          </div>
        </ProductContainer>
      ) : (
        ""
      )}
      <ThreeProduct />
      <AboutCompany />
      <Cart />
      <Footer />
    </SingleItemContainer>
  );
}
export default Product;

const SingleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 540px;
  height: 540px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  align-self: center;
`;

const GenInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 445px;
  align-items: flex-start;
`;

const ItemDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: "Manrope", sans-serif;
  text-transform: uppercase;
  opacity: 0.5;
  text-align: justify;
  color: #000;
`;

const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.42px;
  color: #000;
  font-family: "Manrope", sans-serif;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 47px;
`;

const ItemName = styled.p`
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  letter-spacing: 1.42px;
  font-family: "Manrope", sans-serif;
  margin: 0px;
`;
const AddCartBtn = styled.button`
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
const IncreaseDecreaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 48px;
  background-color: #f1f1f1;
`;

const QuantityBtn = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const EarphoneImg = styled.img`
  position: relative;
  width: 1110px;
`;
const ItemImg = styled.img`
  position: absolute;
`;

const SuggestionHeader = styled.h2`
  align-self: center;
  font-size: 32px;
  fornt-weight: 700;
  color: #000;
  font-family: "Manrope", sans-serif;
  letter-spacing: 1.42px;
  text-transform: uppercase;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-content: center;
  gap: 24px;
`;
const Quantity = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #d87d4a;
  font-family: "Manrope", sans-serif;
`;

const Name = styled.p`
  font-size: 500;
  color: #000;
  font-size: 15px;
  font-family: "Manrope", sans-serif;
  opacity: 0.5;
`;

const ImageAndGeneral = styled.div`
  display: flex;
  align-items: center;
  gap: 124px;
  padding-left: 165px;
  padding-right: 165px;
`;

const MoreInfoContainer = styled.div`
  display: flex;
  gap: 125px;
  margin-bottom: 130px;
  padding-left: 165px;
  padding-right: 165px;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 635px;
  align-items: flex-start;
`;

const IncludesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 350px;
`;

const MoreInfoHeading = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  font-family: "Manrope", sans-serif;
  letter-spacing: 1.42px;
  text-transform: uppercase;
`;

const FeatureText = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: "Manrope", sans-serif;
  text-transform: uppercase;
  opacity: 0.5;
  text-align: left;
  line-height: 25px;

  color: #000;
`;
const GalleryImageContainer = styled.div`
  display: flex;
  gap: 30px;
  padding-left: 165px;
  padding-right: 165px;
  border-radius: 8px;
  margin-bottom: 160px;
`;

const SmallImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const OtherImageContainer = styled.div`
  display: flex;

  gap: 30px;
  margin-left: 165px;
  margin-right: 165px;
`;

const OtherImage = styled.img`
  width: 350px;
  height: 318px;
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

const NameP = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1.42px;
  font-family: "Manrope", sans-serif;
  margin-bottom: 32px;
`;

const SingleProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
