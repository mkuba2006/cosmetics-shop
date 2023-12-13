import React, { useContext } from 'react';
import classes from './style.module.css';
import CartContext from '../store/meal_context';
import Card from "./card";


function Card_list(props) {
  const ctx = useContext(CartContext);
  const min = ctx.items.length > 0;

  const Remove = (id) => {
    ctx.removeItem(id);
  };

  const Add = (item) => {
    ctx.addItem({ ...item, amount: 1 });
    console.log('add');
  };

  return (
    <div className={classes.back}>
      <div className={classes.window}>
        <ul className={classes.ulsa}>
        <h1>Your Cart:</h1>
          {ctx.items.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              title={item.name}
              author={item.author}
              price={item.price}
              onAdd={Add.bind(null, item)}
              onRemove={Remove.bind(null, item.id)}
              amount={item.amount}
            />
          ))}
        </ul>
        <div className={classes.total}>
          <span className={classes.ta}>Total Amount</span>
          <span className={classes.pc}>${ctx.totalAmount.toFixed(2)}</span>
          <div className={classes.bb}>
            {min && <button>Order</button>}
          </div>
        </div>
        <button className={classes.hide} onClick={props.onHide}>x</button>
      </div>
    </div>
  );
}

export default Card_list;
