import React from 'react';
import ArticleContainer from '../ArticleContainer/ArticleContainer';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import SearchBlock from '../SearchBlock/SearchBlock';
import './Content.scss';

const Content = () => {
    return (
        <div className='container'>
            <Breadcrumbs />
            <SearchBlock />
            <ArticleContainer />
        </div>
    );
};

export default Content;
