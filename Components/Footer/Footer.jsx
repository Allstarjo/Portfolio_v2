import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Amon</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                
            </ul> 
            
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/jonathan-amon-47a872217/" className="footer__social-link" target='_blank'>
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/Allstarjo" className="footer__social-link" target='_blank'>
                    <i className="uil uil-github"></i>
                </a>
                
                <a href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage" className="footer__social-link" target='_blank'>
                    <i className="uil uil-info"></i>
                </a>
            </div>
            
            <span className="footer__copy">&#169; JonathanAmon. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer