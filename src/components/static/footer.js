import classes from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    return (
        <footer className={classes.name}>



            <section className={classes.section1}>
                <div className={classes.div1}>
                    
                </div>
                <div className={classes.div1}>

                </div>
                <div className={classes.div1}>

                </div>
                <div className={classes.div1}>

                </div>
            </section>






            <section className={classes.section2}>  
                <p>© 2023 Jakub Myrta. All right reserved</p>
            </section>




        </footer>
    );
}

export default Footer;
