import './Footer.css'
import SocialIcon from '../socialicon/SocialIcon'
import instagram from '../../assets/img/icons/instagram.svg'
import facebook from '../../assets/img/icons/facebook.svg'

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <div className="footer-logo-container">
                <div className="footer-logo">

                </div>
            </div>
            <div className="footer-icon-container">
                <SocialIcon name="instagram" image={instagram} url="https://instagram.com/skindy.mx?igshid=YmMyMTA2M2Y="/>
                <SocialIcon name="facebook" image={facebook} url="" />          
            </div>
        </div>
    )
}

export default Footer