import React, { useState } from "react";
import Item from "./item";
import classes from './style.module.css';
import { Data } from "./data";



function Items() {
  const [visibleItems, setVisibleItems] = useState(8);

  const rend = Data.slice(0, visibleItems).map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.type}
      price={item.price}
      img={item.img}
      author={item.author}
    />
  ));

  
  const showMore = () => {
    setVisibleItems((oldValue) => oldValue + 12);
  };

  return (
    <div id="products">
      <h1 className={classes.title}>Products</h1>
      <ul className={classes.ase}>{rend}</ul>
      {visibleItems < Data.length && (
        <div className={classes.before_show}>
        <button className={classes.show} onClick={showMore}>Show More</button>
        </div>
      )}
    </div>
  );
}

export default Items;
