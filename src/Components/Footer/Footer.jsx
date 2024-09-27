import { Link } from "react-router-dom"
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGithub, faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';





function Footer() {
    return(
        <div>
            <div className="footer-main">
            <div className="footer-one">
                <h1>Need Help?</h1>
                <p>Phone No: <span>+92 3322159074</span></p>
                <p>Email: <span>syedzohaibali9900@gmail.com</span></p>
            </div>

            <div className="footer-sec">
                <div className="copy-right">
                    <p>&copy; 2024 <span>Zohaib Ali</span>. <br /> All rights reserved.</p>
                </div>
                <div className="social-link">
                    <h2>Let's Connect</h2>
                   <a href="https://github.com/SyedZohaibAliKazmi"><FontAwesomeIcon icon={faGithub} className="icons"/></a>
                   <a href="https://www.linkedin.com/in/syed-zohaib-ali-kazmi-6b3301247/"><FontAwesomeIcon icon={faLinkedin} className="icons"/></a>
                   <a href="https://www.facebook.com/syed.zohaibalikazmi.9?mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} className="icons"/></a>
                   <a href="https://www.instagram.com/syedzohaibalikazmi?igsh=aGFlaW1zdnJ1cnY2"><FontAwesomeIcon icon={faInstagram} className="icons"/></a>
                </div>
            </div>

            </div>  {/* main ha  */}

        </div>
    )
}

export default Footer;