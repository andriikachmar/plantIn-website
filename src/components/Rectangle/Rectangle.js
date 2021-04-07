import React from 'react';
import RectangleImg from '../../assets/images/rectangle.png';
import './Rectangle.scss';

const Rectangle = () => {
    return (
        <div className='rectangle'>
            <img
                src={RectangleImg}
                srcset={`${RectangleImg} 2x`}
                alt='rectangle'
            />
            <span>New</span>
        </div>
    );
};

export default Rectangle;
