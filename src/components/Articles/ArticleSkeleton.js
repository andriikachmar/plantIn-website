import React from 'react';
import CardImageSkeleton from '../../assets/images/article_image_skeleton.png';
import '../ArticleContainer/ArticleContainer.scss';

const ArticleSkeleton = () => {
    return (
        <section className='article--skeleton'>
            <div className='article--skeleton__image'>
                <img
                    src={CardImageSkeleton}
                    srcset={`${CardImageSkeleton} 2x`}
                    alt='skeleton'
                />
            </div>
            <div className='article--skeleton__image'>
                <img
                    src={CardImageSkeleton}
                    srcset={`${CardImageSkeleton} 2x`}
                    alt='skeleton'
                />
            </div>
            <div className='article--skeleton__image'>
                <img
                    src={CardImageSkeleton}
                    srcset={`${CardImageSkeleton} 2x`}
                    alt='skeleton'
                />
            </div>
        </section>
    );
};

export default ArticleSkeleton;
