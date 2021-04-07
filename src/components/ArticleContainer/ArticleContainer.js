import React from 'react';
import ArticleInteresting from '../Articles/ArticleInteresting';
import ArticleNew from '../Articles/ArticleNew';
import ArticleSkeleton from '../Articles/ArticleSkeleton';
import ArticleTop from '../Articles/ArticleTop';
import './ArticleContainer.scss';

const ArticleContainer = () => {
    return (
        <main className='article-container'>
            <ArticleNew />
            <ArticleTop />
            <ArticleInteresting />
            <ArticleSkeleton />
        </main>
    );
};

export default ArticleContainer;
