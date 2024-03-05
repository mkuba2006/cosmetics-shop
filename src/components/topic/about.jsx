import React from "react";
import classes from './style.module.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sec() {
    return (
        <div className={classes.first_about} id="nnn">
        <div className={classes.images} >
            <img className={classes.img} src="https://beardman.pl/userdata/public/gfx/11476/captain-fawcett-hair-tonic-bay-rum-tonik-do-wlosow-250ml-1.jpg" />
        </div>
            <div className={classes.first_second}>
                <h1>What we got:</h1>
                <ul>
                    <li>Prestylers</li>
                    <li>Pomads</li>
                    <li>Pouders</li>
                    <li>Wax</li>
                    <li>Styling Clays </li>
                    <li>Styling Spray </li>
                    <li>Pastes</li>
                </ul>
                <a href="#products">
                    <button className={classes.button2}><p>Shop now </p><FontAwesomeIcon icon={faArrowRight} className={classes.arrow2} /></button>
                </a>
            </div>
        </div>
    );
}

export default Sec;
