import { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { cartTotalPriceSelector } from "../store/selector";
import { clear } from "../features/CartSlice";
import Okey from "../Images/okey.png";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const CartItems = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    number: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPIN: "",
    paymentMethod: "",
  });

  function HomeAndClear() {
    navigate("/");
    dispatch(clear());
  }

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitData(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <CheckoutPageWrapper>
      <NavBar />
      <WrapperContainer>
        <CheckoutContainer onSubmit={submitData}>
          <CheckoutHeader>checkout</CheckoutHeader>
          <CheckoutSubHeader>billing details</CheckoutSubHeader>
          <ContainerWrapper>
            <InputBox>
              <InputLabel
                htmlFor="firstName"
                onClick={(event) => event.preventDefault()}
              >
                Name
              </InputLabel>
              <InputWrapper
                type="text"
                id="firstName"
                placeholder="Alexei Ward"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </InputBox>
            <InputBox>
              <InputLabel
                htmlFor="email"
                onClick={(event) => event.preventDefault()}
              >
                Email Address
              </InputLabel>
              <InputWrapper
                type="text"
                id="email"
                placeholder="Alexei Ward"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </InputBox>
          </ContainerWrapper>
          <InputBox>
            <InputLabel
              htmlFor="number"
              onClick={(event) => event.preventDefault()}
            >
              Phone Number
            </InputLabel>
            <InputWrapper
              type="number"
              id="number"
              placeholder="+1 202-555-0136"
              value={formData.number}
              name="number"
              onChange={handleChange}
            />
          </InputBox>
          <CheckoutSubHeader>shipping info</CheckoutSubHeader>
          <NameBox>
            <InputLabel
              htmlFor="address"
              onClick={(event) => event.preventDefault()}
            >
              Address
            </InputLabel>
            <AddressInput
              type="text"
              id="address"
              placeholder="1137 Williams Avenue"
              value={formData.address}
              name="address"
              onChange={handleChange}
            />
          </NameBox>
          <ContainerWrapper>
            <InputBox>
              <InputLabel
                htmlFor="zip"
                onClick={(event) => event.preventDefault()}
              >
                ZIP Code
              </InputLabel>
              <InputWrapper
                type="number"
                id="zip"
                placeholder="10001"
                value={formData.zip}
                name="zip"
                onChange={handleChange}
              />
            </InputBox>
            <InputBox>
              <InputLabel
                htmlFor="city"
                onClick={(event) => event.preventDefault()}
              >
                City
              </InputLabel>
              <InputWrapper
                type="text"
                id="city"
                placeholder="New York"
                value={formData.city}
                name="city"
                onChange={handleChange}
              />
            </InputBox>
          </ContainerWrapper>
          <InputBox>
            <InputLabel
              htmlFor="country"
              onClick={(event) => event.preventDefault()}
            >
              Country
            </InputLabel>
            <InputWrapper
              type="text"
              id="country"
              placeholder="United States"
              value={formData.country}
              name="country"
              onChange={handleChange}
            />
          </InputBox>
          <CheckoutSubHeader>payment details</CheckoutSubHeader>
          <PaymentContainer>
            <div>
              <PaymentLabel>payment method</PaymentLabel>
            </div>
            <RadioContainer>
              <MoneyInputContaner>
                <RadioInput
                  type="radio"
                  id="e-money"
                  name="paymentMethod"
                  value="eMoney"
                  onChange={handleChange}
                />
                <MoneyLabel htmlFor="e-money">e-money</MoneyLabel>
              </MoneyInputContaner>
              <MoneyInputContaner>
                <RadioInput
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  onChange={handleChange}
                />
                <MoneyLabel htmlFor="cash">Cash on Delivery</MoneyLabel>
              </MoneyInputContaner>
            </RadioContainer>
          </PaymentContainer>
          <ContainerWrapper>
            <InputBox>
              <InputLabel
                htmlFor="moneyNumber"
                onClick={(event) => event.preventDefault()}
              >
                e-Money Number
              </InputLabel>
              <InputWrapper
                type="number"
                id="moneyNumber"
                placeholder="238521993"
                value={formData.eMoneyNumber}
                name="eMoneyNumber"
                onChange={handleChange}
              />
            </InputBox>
            <InputBox>
              <InputLabel
                htmlFor="moneyPIN"
                onClick={(event) => event.preventDefault()}
              >
                e-Money PIN
              </InputLabel>
              <InputWrapper
                type="number"
                id="moneyPIN"
                placeholder="6891"
                value={formData.eMoneyPIN}
                name="eMoneyPIN"
                onChange={handleChange}
              />
            </InputBox>
          </ContainerWrapper>
          {/* <button type="submit">submit</button> */}
        </CheckoutContainer>

        <SummaryContainer>
          <SummaryHeading>Summary</SummaryHeading>
          {CartItems
            ? CartItems.map(({ name, image, price, quantity, id }) => (
                <ItemContainer>
                  <ItemImage src={process.env.PUBLIC_URL + image?.desktop} />
                  <NameAndPrice>
                    <NameP>{name}</NameP>
                    <PriceP>${price}</PriceP>
                  </NameAndPrice>
                  <Quantity>x{quantity}</Quantity>
                </ItemContainer>
              ))
            : ""}
          <SumContainer>
            <SumKey>total</SumKey>
            <SumValue>$ {totalPrice}</SumValue>
          </SumContainer>
          <SumContainer>
            <SumKey>shipping</SumKey>
            <SumValue>$50</SumValue>
          </SumContainer>
          <SumContainer>
            <SumKey>vat (included)</SumKey>
            <SumValue>$ 1079</SumValue>
          </SumContainer>
          <SumContainer>
            <SumKey>grand total</SumKey>
            <GrandTotal>$ {totalPrice + 50}</GrandTotal>
          </SumContainer>
          <PayBtn onClick={() => setModal(true)}>continue & pay</PayBtn>
        </SummaryContainer>
        <SuccessModal visible={modal}>
          <OkeyIcon src={Okey} />
          <SuccessMessage>
            thank you <br></br>from your order
          </SuccessMessage>
          <SuccessMessage2>
            you will receive an email confirmation shortly
          </SuccessMessage2>
          <SuccItemsDesc>
            <LeftBox>
              <ItemContainer>
                <ItemImage
                  src={process.env.PUBLIC_URL + CartItems[0].image?.desktop}
                />
                <NameAndPrice>
                  <NameP>{CartItems[0].name}</NameP>
                  <PriceP>${CartItems[0].price}</PriceP>
                </NameAndPrice>
                <Quantity>x{CartItems[0].quantity}</Quantity>
              </ItemContainer>
              <AndOtherItems>{`and ${CartItems.length} other items(s)`}</AndOtherItems>
            </LeftBox>

            <SuccessBoxTotal>
              <SuccGrandTotal>grand total</SuccGrandTotal>
              <SuccGrandTotalNum>$ {totalPrice + 50}</SuccGrandTotalNum>
            </SuccessBoxTotal>
          </SuccItemsDesc>
          <BackToHomeBtn onClick={() => HomeAndClear()}>
            back to home
          </BackToHomeBtn>
        </SuccessModal>
      </WrapperContainer>

      <Footer />
    </CheckoutPageWrapper>
  );
}
export default Checkout;

const SuccessModal = styled.div`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  display: flex;
  align-self: center;
  flex-direction: column;
  padding: 48px;

  width: 540px;
  height: 581px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #979797;
  position: absolute;
  top: 200px;
`;

const AndOtherItems = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #000;
  opacity: 0.5;
  font-family: "Manrope", sans-serif;
  padding-left: 18px;
  margin: 0px;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
`;

const SuccItemsDesc = styled.div`
  display: flex;
  width: 444px;
  background-color: #f1f1f1;
  gap: 10px;
`;
const OkeyIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const SuccessMessage = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  font-family: "Manrope", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.42px;
  margin-top: 30px;
`;

const SuccessMessage2 = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  opacity: 0.5;
  font-family: "Manrope", sans-serif;
`;

const BackToHomeBtn = styled.button`
  height: 48px;
  width: 444px;
  background-color: #d87d4a;
  border: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
  text-transform: uppercase;
  align-self: flex-start;
  margin-top: 48px;
  font-family: "Manrope", sans-serif;
  cursor:pointer;
`;

const SuccessBoxTotal = styled.div`
  display: flex;
  border-radius: 8px;
  align-items: center;
  gap: 5px;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  flex-direction: column;
  background-color: #000;
  width: 198px;
  height: 140px;
`;

const SuccGrandTotal = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  opacity: 0.5;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  margin: 0px;
`;

const SuccGrandTotalNum = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
  margin: 0px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 20px;
`;

const Quantity = styled.p`
  font-size: 15px;
  color: #000;
  opacity: 0.5;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  margin-left: 25px;
`;

const SummaryHeading = styled.h1`
  font-size: 18px;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.28px;
  font-family: "Manrope", sans-serif;
  margin-bottom: 31px;
`;

const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 150px;
`;

const NameP = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #000;
  font-family: "Manrope", sans-serif;
  margin: 0px;
`;
const PriceP = styled.p`
  font-size: 14px;
  font-weight: 700;
  opacity: 0.5;
  color: #000;
  margin: 0px;
  font-family: "Manrope", sans-serif;
`;

const CheckoutPageWrapper = styled.div`
  background-color: #f2f2f2;
`;

const WrapperContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 140px;
  margin-bottom: 140px;
  border-radius: 8px;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 612px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const CheckoutContainer = styled.form`
  display: flex;
  flex-direction: column;

  gap: 24px;
  width: 730px;
  display: flex;
  padding: 48px;

  flex-direction: column;
  background-color: #fff;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const InputWrapper = styled.input`
  display: flex;
  flex-direction: column;
  width: 290px;
  padding-left: 24px;
  height: 56px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  background-color: #fff;
  outline: none;
  font-family: "Manrope", sans-serif;
   {
    &:focus {
      border: 1px solid #d87d4a;
    }
  
`;
const NameInput = styled.input`
  width: 309px;
  height: 56px;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #000;
  font-family: "Manrope", sans-serif;

   {
    &:focus {
    }
  }
`;

const AddressInput = styled.input`
  width: 620px;
  height: 56px;

  border: 1px solid #cfcfcf;
  border-radius: 8px;
  background-color: #fff;
  outline: none;
  padding-left: 24px;
  font-family: "Manrope", sans-serif;
   {
    &:focus {
      border: 1px solid #d87d4a;
    }
  }
`;

const CheckoutHeader = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  letter-spacing: 1.42px;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
`;

const CheckoutSubHeader = styled.h2`
  font-size: 13px;
  font-weight: 700;
  color: #d87d4a;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
`;

const MoneyInputWrapper = styled.input`
  align-self: flex-end;
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  width: 309px;
  padding-left: 24px;
  height: 56px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  background-color: #fff;
  outline: none;
   {
    &:focus {
      border: 1px solid #d87d4a;
    }
  }
`;
const PaymentContainer = styled.div`
  display: flex;
  gap: 240px;
`;

const MoneyInputContaner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 8px;

  width: 309px;
  height: 56px;
  border: 1px solid #cfcfcf;
   {
    &:hover {
      border: 1px solid #d87d4a;
    }
  }
`;
const MoneyLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  color: #000;
  font-family: "Manrope", sans-serif;
`;

const PaymentLabel = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #000;
  font-family: "Manrope", sans-serif;
`;
const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const RadioInput = styled.input`
  accent-color: #d87d4a;
`;

const SumContainer = styled.div`
  display: flex;
  width: 280px;
  align-items: center;
  justify-content: space-between;
`;

const SumKey = styled.p`
  font-size: 15px;
  color: #000;
  opacity: 0.5;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
`;

const SumValue = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
`;

const GrandTotal = styled.p`
  font-size: 18px;
  color: #d87d4a;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
`;

const PayBtn = styled.button`
  height: 48px;
  background-color: #d87d4a;
  border: none;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor:pointer;
  margin-top: 30px;

  color: #fff;
  text-transform: uppercase;

  font-family: "Manrope", sans-serif;
`;
