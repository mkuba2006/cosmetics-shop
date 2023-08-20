import React from "react";
import classes from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <nav className={classes.name}>
            <h1>Men site</h1>
            <div>
                <FontAwesomeIcon icon={faShoppingCart} />Cart
            </div>
        </nav>
    );
}

export default Header;
