import classes from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faCcVisa, faPaypal, faCcMastercard } from '@fortawesome/free-brands-svg-icons';


function Footer() {

    return (
        <footer className={classes.footer}>

            <section className={classes.section1}>
                <div className={classes.div1}>
                    <h1>Men site</h1>

                </div>


                <div className={classes.div2}>
                    <h1>Our Address</h1>
                    <h3>Gdańsk - OLd Town</h3>
                    <h3>Sopot - Monte Cassino heroes</h3>
                    <h3>123-456-789</h3>
                </div>



                <div className={classes.div3}>
                    <h1>Contact Us</h1>
                    <h3>+48 123 456 789</h3>
                    <div className={classes.ikony}>
                        <FontAwesomeIcon icon={faInstagram} className={classes.ikona}/>
                        <FontAwesomeIcon icon={faFacebook} className={classes.ikona}/>
                        <FontAwesomeIcon icon={faGithub} className={classes.ikona}/>
                    </div>
                </div>


                <div className={classes.div4}>
                <h1 className={classes.heading}>We accept all credit cards</h1>
                    <div className={classes.ikony}>
                        <FontAwesomeIcon icon={faCcVisa} className={classes.ikona}/>
                        <FontAwesomeIcon icon={faPaypal} className={classes.ikona}/>
                        <FontAwesomeIcon icon={faCcMastercard} className={classes.ikona}/>
                    </div>
                </div>
            </section>






            <section className={classes.section2}>  
                <p>© 2023 Jakub Myrta. All right reserved</p>
            </section>




        </footer>
    );
}

export default Footer;
