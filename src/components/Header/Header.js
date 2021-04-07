import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { ReactComponent as MenuSvg } from '../../assets/images/menu.svg';
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';
import user from '../../assets/images/user.png';
import './Header.scss';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <div className='header'>
            <div className='logo'>
                <img
                    className='logo__img'
                    src={logo}
                    alt='logo'
                ></img>
            </div>
            <nav className={isActive ? 'navbar--active' : 'navbar'}>
                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <a href='/#'>Discover</a>
                        <a href='/#'>My Plants</a>
                        <a href='/#'>Diseases</a>
                        <a href='/#'>Blog</a>
                        <a href='/#'>FAQ</a>
                        <a href='/#'>Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div className='actions'>
                <button className='actions__item--upgrade'>
                    Upgrade to PRO
                </button>
                <button className='actions__item--search'>
                    <SearchSvg />
                </button>
                <button className='actions__item--user'>
                    <img src={user} alt='user' />
                </button>
                <button
                    className='actions__item--menu'
                    onClick={toggleClass}
                >
                    <MenuSvg />
                </button>
            </div>
        </div>
    );
};

export default Header;
