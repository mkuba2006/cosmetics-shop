import { useState } from "react";
import Header from "./components/static/Header";
import Items from "./components/items/items";
import CartProvider from "./components/store/CartProvider";
import Sum from "./components/topic/sum";
import Card_list from "./components/cart/Card_item";
function App() {
  const [show, isShow] = useState(false)

  const setShow = () =>{
    isShow(true)
  }
  const hide = () =>{
    isShow(false)
  }


  return (
    <CartProvider>
      <Header onClick={setShow}/>
      <Sum />
      {show && <Card_list onHide={hide}/>}
      <Items />
    </CartProvider>
  );
}

export default App;
