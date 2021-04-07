import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer__navbar'>
                <ul className='footer__navbar-list'>
                    <li className='footer__navbar-item'>
                        <a href='/#'>Terms of Service</a>
                    </li>
                    <li className='footer__navbar-item'>
                        <a href='/#'>Privacy Policy</a>
                    </li>
                    <li className='footer__navbar-item'>
                        <a href='/#'>Subscription Policy</a>
                    </li>
                </ul>
            </nav>
            <div className='footer__copyright'>
                <p className='footer__copyright-text'>
                    &copy;Copyright &copy; 2020 PlantIn. All rights
                    reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
