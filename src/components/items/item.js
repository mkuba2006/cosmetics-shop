import React, { useContext } from 'react';
import CartContext from '../../components/store/meal_context';
import Form from './Item_form';
import classes from './style.module.css';

function Item(props) {
  const ctx = useContext(CartContext);

  const addToCartHandler = (quantity) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: Number(quantity),
      price: props.price,
      img: props.img,
      author: props.author,
    });
    console.log(ctx.items);
  };

  return (
    <li className={classes.item} id={props.id}>
      <div id='img'>
        <img src={props.img} alt={props.name} className={classes.imga} />
      </div>
      <div>
        <h2 className={classes.name}>{props.name}</h2>
        <h4 className={classes.description}>by <span className={classes.sps}>{props.author}</span></h4>
        {/* <h4 className={classes.description}>{props.description}</h4> */}
        <h4 className={classes.price}>${props.price}</h4> 
      </div>
      <div className={classes.form}>
        <Form id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default Item;
