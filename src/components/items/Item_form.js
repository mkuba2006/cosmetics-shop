import react  from "react";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
//image,name,type,price,addtocart
import classes from './style.module.css';
function Form(props) {
    const amountInputRef = useRef();
    const submit = (e) =>{
        e.preventDefault();
        const Enteredamount = amountInputRef.current.value;
        const number = Enteredamount;

        if ( Enteredamount.trim().length === 0 || number < 1 || number > 5) {
        return;
        }
        props.onAddToCart(number);
    }

  return (
    <form onSubmit={submit}>
        <input
        ref={amountInputRef}
        id={'amount_' + props.id}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
    <button className={classes.button}><FontAwesomeIcon icon={faCartShopping}  className={classes.icon}/></button>
    </form>
  );
}

export default Form;
