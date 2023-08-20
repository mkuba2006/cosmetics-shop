import { Fragment } from "react";
import Header from "./components/static/Header";
import Topic from "./components/topic/main";
import Sec from "./components/topic/about";
import Items from "./components/items/items";
import CartProvider from "./components/store/CartProvider";
function App() {


  return (
    <CartProvider>
      <Header />
      <Topic />
      <Sec />
      <Items />
    </CartProvider>
  );
}

export default App;
