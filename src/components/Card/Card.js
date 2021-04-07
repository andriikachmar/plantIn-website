import React from 'react';
import './Card.scss';

const Card = ({ header, text, imgSrc }) => {
    return (
        <div className='card'>
            <div className='card__image-wrapper'>
                <img
                    src={imgSrc}
                    srcset={`${imgSrc} 2x`}
                    alt='card'
                />
            </div>
            <div className='card__content'>
                <p className='card__content--date'>
                    Feb 23 · 8 min read
                </p>
                <h1
                    className='card__content--heading'
                    dangerouslySetInnerHTML={{ __html: header }}
                />
                <p className='card__content--text'>{text}</p>
            </div>
        </div>
    );
};

export default Card;
