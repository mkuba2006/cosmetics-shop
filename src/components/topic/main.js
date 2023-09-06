import React from "react";
import classes from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Topic() {
    return (
        <main>
            <div className={classes.first}>
                <h1 className={classes.h11}>Enhance style with premium products</h1>
                <h4 className={classes.hhh}>Upgrade your daily routine with our premium men's hair products. Experience confidence through exceptional grooming.</h4>
                <a href="#nnn">
                    <button>Explore <FontAwesomeIcon icon={faArrowRight} className={classes.arrow} /></button>
                </a>
            </div>   
            <div className={classes.imageContainer}>
                <img
                src="https://www.pomade.com/cdn/shop/products/BluMaan_Monarch_Open-Recovered_grande.jpg?v=1658789145"
                alt="Meraki"
                />
            </div>
             <div className={classes.third}>
                <h5 className={classes.follow}>FOLLOW US</h5>
                <div className={classes.icons}>
                    <FontAwesomeIcon icon={faInstagram} className={classes.icon}/>
                    <FontAwesomeIcon icon={faFacebook} className={classes.icon}/>
                    <FontAwesomeIcon icon={faGithub} className={classes.icon}/>
                </div>
            </div>
        </main>
    );
}

export default Topic;
