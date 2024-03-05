import React from 'react';
import classes from './style.module.css';

function Card(props) {

  return (
    <li className={classes.Card}>
      <img src={props.img} className={classes.imgb}/>
      <div className={classes.second}>
        <h1>{props.author} -{props.title} </h1>
        <p>Amount: <button onClick={props.onAdd}>+</button> {props.amount} <button onClick={props.onRemove}>-</button></p>
      </div>
      <div className={classes.third}>
        <h1><b>{props.price}$</b></h1>
      </div>
    </li>
  );
}

export default Card;
