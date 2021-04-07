import React from 'react';
import CardImageLamp from '../../assets/images/article_image_lamp.png';
import CardImageSeedling from '../../assets/images/article_image_seedling.png';
import '../ArticleContainer/ArticleContainer.scss';
import Card from '../Card/Card';

const ArticleTop = () => {
    return (
        <section className='article--top'>
            <div className='article__heading'>TOP of the Day</div>
            <Card
                imgSrc={CardImageLamp}
                header='Professional Repot'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImageSeedling}
                header='Professional Repot'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
        </section>
    );
};

export default ArticleTop;
