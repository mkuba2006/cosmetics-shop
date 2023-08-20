import React from "react";
import classes from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';


function Topic() {
    return (
        <main>
            <div className={classes.first}>
                <h1>We have the best hair products for you</h1>
                <h4>Upgrade your daily routine with our premium men's hair products. Experience confidence through exceptional grooming.</h4>
            </div>   
             <img src="" alt="Meraki"/>
             <div className={classes.third}>
                <h5 className={classes.follow}>FOLLOW US</h5>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </main>
    );
}

export default Topic;
