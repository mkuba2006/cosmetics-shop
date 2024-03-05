
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './style.module.css';
function Form(props) {
    const submit = (e) =>{
        e.preventDefault();
        const number = 1;
        props.onAddToCart(number);
    }

  return (
    <form onSubmit={submit}>
    <button className={classes.buttona}>
    ADD TO CART<FontAwesomeIcon icon={faCartShopping}  className={classes.icon}/>
    </button>
    </form>
  );
}

export default Form;




