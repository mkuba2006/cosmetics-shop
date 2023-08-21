import React, { useContext } from 'react';
import classes from './style.module.css';
import CartContext from '../../components/store/meal_context';
import Card from "./card";


function Card_list(props) {
    const ctx = useContext(CartContext);
    const min = ctx.items.length > 0;
    const Remove = (id) => {
        ctx.removeItem(id);
    };
        
    const Add = (item) => {
        ctx.addItem({ ...item, amount: 1 });
    };

  return (
    <div>
      <ul>
        {ctx.items.map((item)=>(
            <Card
                key={item.id}
                img={item.img}
                title={item.name}
                author={item.author}
                price={item.price}
                onADD={Add.bind(null, item)}
                onREMOVE={Remove.bind(null, item.id)}
            />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
       </div>
      {min && <button>Order</button>}
    </div>
  );
}

export default Card_list;
