import { Fragment } from "react";
import Header from "./components/static/Header";
import Items from "./components/items/items";
import CartProvider from "./components/store/CartProvider";
import Sum from "./components/topic/sum";
import Card_list from "./components/cart/Card_item";
function App() {


  return (
    <CartProvider>
    <Card_list/>
      <Header />
      <Sum />
      <Items />
    </CartProvider>
  );
}

export default App;
