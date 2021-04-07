import React from 'react';
import bannerImg from '../../assets/images/banner.png';
import logo from '../../assets/images/logo.png';
import './Banner.scss';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner__content'>
                <div className='banner__logo'>
                    <img
                        src={logo}
                        srcset={`${logo} 2x`}
                        alt='logo'
                    />
                </div>
                <h1 className='banner__heading'>
                    Get unlimited access to exclusive articles
                </h1>
                <h3 className='banner__subheading'>
                    Get rid of limits and read everything you wish
                </h3>
                <button className='banner__button'>
                    Try For Free
                </button>
            </div>
            <div className='banner__image'>
                <img src={bannerImg} alt='banner girl' />
            </div>
        </div>
    );
};

export default Banner;
