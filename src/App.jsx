import { useState, useEffect } from "react";
import Header from "./components/static/Header";
import Items from "./components/items/items";
import CartProvider from "./components/store/CartProvider";
import Sum from "./components/topic/sum";
import Card_list from "./components/cart/Card_item";
import Footer from "./components/static/footer";
import "./style.css";

function App() {
  const [show, isShow] = useState(false);

  const setShow = () => {
    isShow(true);
  };
  const hide = () => {
    isShow(false);
  };

  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);

  return (
    <CartProvider>
      <Header onClick={setShow} />
      <Sum />
      {show && <Card_list onHide={hide} />}
      <Items />
      <Footer />
    </CartProvider>
  );
}

export default App;
