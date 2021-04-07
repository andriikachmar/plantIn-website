import React from 'react';
import './Breadcrumbs.scss';

const Breadcrumbs = () => {
    return (
        <ul className='breadcrumbs'>
            <li className='breadcrumbs__item breadcrumbs__item--home'>
                <a href='/#'>Home</a>
            </li>
            <li className='breadcrumbs__item breadcrumbs__item--last'>
                <a href='/#'>Blog</a>
            </li>
        </ul>
    );
};

export default Breadcrumbs;
