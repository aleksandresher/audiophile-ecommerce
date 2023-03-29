import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import SingleProduct from "./Pages/SingleProduct";
import Product from "./Pages/Product";
import UserStore from "./context/Context";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  const [value, setValue] = useState({
    id: 1,
    item: "",
    category: "",
  });
  return (
    <div className="App">
      <UserStore.Provider value={{ value, setValue }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${value.id}`} element={<Product />} />
          <Route path={`/${value.category}`} element={<SingleProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </UserStore.Provider>
    </div>
  );
}

export default App;
