import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { increament, decrement, clear } from "../features/CartSlice";
import { cartTotalPriceSelector, cartTotalSelector } from "../store/selector";

function Cart() {
  const CartItems = useSelector((state) => state.cart);
  const UI = useSelector((state) => state.ui.cartVisible);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  const itemTotal = useSelector(cartTotalSelector);
  const navigate = useNavigate();

  console.log(CartItems);
  return (
    <CartContainer visible={UI}>
      <CartHeadingContainer>
        <CartHeading>cart({itemTotal})</CartHeading>
        <RemoveBtn onClick={() => dispatch(clear())}>remove all</RemoveBtn>
      </CartHeadingContainer>
      {CartItems
        ? CartItems.map(({ name, image, price, quantity, id }) => (
            <CartItemContainer>
              <CartItemImage src={process.env.PUBLIC_URL + image?.desktop} />
              <NameAndPrice>
                <NameP>{name}</NameP>
                <PriceP>${price}</PriceP>
              </NameAndPrice>
              <IncreaseDecreaseContainer>
                <QuantityBtn
                  disabled={quantity === 1}
                  onClick={() => dispatch(decrement(id))}
                >
                  -
                </QuantityBtn>
                <p>{quantity}</p>
                <QuantityBtn onClick={() => dispatch(increament(id))}>
                  +
                </QuantityBtn>
              </IncreaseDecreaseContainer>
            </CartItemContainer>
          ))
        : ""}
      <Total>
        <TotalP>total</TotalP>
        <TotalPrice>${totalPrice}</TotalPrice>
      </Total>
      <CheckoutBtn onClick={() => navigate("/Checkout")}>checkout</CheckoutBtn>
    </CartContainer>
  );
}
export default Cart;

const CartHeadingContainer = styled.div`
  display: flex;
  width: 375px;
  justify-content: space-between;
`;

const RemoveBtn = styled.button`
  background-color: inherit;
  border: none;
  text-decoration: underline;
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
  color: #000;
  text-transform: uppercase;

  font-family: "Manrope", sans-serif;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: fixed;
  top: 120px;
  right: 165px;
  z-index: 2;
  width: 377px;
  height: 488px;
  padding: 31px;
  border: 1px solid #979797;
  border-radius: 8px;
  background: #fff;
  overflow: auto;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(p) => (p.visible ? 0 : "377px")});
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  overflow-x: hidden;
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartHeading = styled.h1`
  font-size: 18px;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.28px;
  font-family: "Manrope", sans-serif;
`;

const CartItemImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;
const IncreaseDecreaseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 96px;
  height: 32px;
  background-color: #f1f1f1;
  margin-left: 61px;
`;

const QuantityBtn = styled.button`
  border: none;
  background-color: inherit;
`;
const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 370px;
`;

const TotalP = styled.p`
  font-size: 15px;
  font-weight: 500;
  opacity: 0.5;
  color: #000;
  text-transform: uppercase;

  font-family: "Manrope", sans-serif;
`;
const TotalPrice = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Manrope", sans-serif;
`;

const CheckoutBtn = styled.button`
  width: 370px;
  height: 48px;
  background-color: #d87d4a;
  border: none;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;

  color: #fff;
  text-transform: uppercase;

  font-family: "Manrope", sans-serif;
`;
