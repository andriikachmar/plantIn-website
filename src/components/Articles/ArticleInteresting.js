import React from 'react';
import CardImagePot from '../../assets/images/article_image_pot.png';
import CardImageReport from '../../assets/images/article_image_report.png';
import CardImageWatering from '../../assets/images/article_image_watering.png';
import '../ArticleContainer/ArticleContainer.scss';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

const ArticleInteresting = () => {
    return (
        <section className='article--interesting'>
            <div className='article__heading'>Interesting</div>
            <Card
                imgSrc={CardImageWatering}
                header='Watering mastery'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImagePot}
                header='Plant pot secrets'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImageReport}
                header='Professional Repot'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImageWatering}
                header='Watering mastery'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImageReport}
                header='Professional Repot'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImagePot}
                header='Plant pot secrets'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Banner />
            <Card
                imgSrc={CardImageWatering}
                header='Watering mastery'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImagePot}
                header='Plant pot secrets'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImageReport}
                header='Professional Repot'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImageWatering}
                header='Watering mastery'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImageReport}
                header='Professional Repot'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
            <Card
                imgSrc={CardImagePot}
                header='Plant pot secrets'
                text={
                    'Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...'
                }
            />
        </section>
    );
};

export default ArticleInteresting;
