import React from "react";
import classes from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';


function Topic() {
    return (
        <main>
            <div className={classes.first}>
                <h1>Enhance style with premium products</h1>
                <h4>Upgrade your daily routine with our premium men's hair products. Experience confidence through exceptional grooming.</h4>
            </div>   
            <div className={classes.imageContainer}>
                <img
                src="https://github.com/mkuba2006/site/blob/master/public/images/monarch.jpg?raw=true"
                alt="Meraki"
                />
            </div>
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
