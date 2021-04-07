import React from 'react';
import CardImageSoil from '../../assets/images/article_image_soil.png';
import '../ArticleContainer/ArticleContainer.scss';
import Card from '../Card/Card';
import Rectangle from '../Rectangle/Rectangle';

const ArticleNew = () => {
    return (
        <section className='article--new'>
            <Rectangle />
            <Card
                imgSrc={CardImageSoil}
                header='Tips &amp; Tricks For Cutting'
                text={
                    'Pruning, like any other skill, requires knowing what you are doing to achieve success. The old idea that anyone with a chain saw or a pruning saw can be a landscape pruner is far from the truth. More trees are killed or ruined each year from improper pruning than by pests. Remember that pruning is the removal or...'
                }
            />
        </section>
    );
};

export default ArticleNew;
