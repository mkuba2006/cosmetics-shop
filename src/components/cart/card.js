import React, { useContext } from 'react';
import classes from './style.module.css';

function Card(props) {


  return (
    <li className={classes.Card}>
      <img src={props.img} className={classes.imgb}/>
      <div>
        <h1>{props.title}</h1>
        <p>by <span>{props.author}</span></p>
      </div>
      <div>
        <h1><b>{props.price}</b></h1>
          <button onCLick={props.onADD}>+</button>
          <button onCLick={props.onREMOVE}>-</button>
      </div>
    </li>
  );
}

export default Card;
