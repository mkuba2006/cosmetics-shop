import react  from "react";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import classes from './style.module.css';
function Form(props) {
    // const amountInputRef = useRef();
    const submit = (e) =>{
        e.preventDefault();
        // const Enteredamount = 1;
        const number = 1;

        // if ( Enteredamount.trim().length === 0 || number < 1 || number > 5) {
        // return;
        // }
        props.onAddToCart(number);
    }

  return (
    <form onSubmit={submit}>
    <button className={classes.buttona}>
    {/* <input
        ref={amountInputRef}
        id={'amount_' + props.id}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      /> */}
    ADD TO CART<FontAwesomeIcon icon={faCartShopping}  className={classes.icon}/>
    </button>
    </form>
  );
}

export default Form;




