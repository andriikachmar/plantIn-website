import React from 'react';
import girlImage from '../../assets/images/girl_image.png';
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';
import './SearchBlock.scss';

const SearchBlock = () => {
    return (
        <section className='search-section'>
            <div className='search__heading'>
                <h1 className='search__title'>
                    Stay always tuned with planting trends
                </h1>
                <h3 className='search__subtitle'>
                    <strong>Tips &amp; Tricks</strong> selected
                    specially for <strong>you!</strong>
                </h3>
                <div className='search-input__wrapper'>
                    <input
                        className='search-input'
                        type='search'
                        placeholder='Search'
                    />
                    <button className='search-input__button'>
                        <SearchSvg />
                    </button>
                </div>
            </div>
            <div className='search__image'>
                <img src={girlImage} alt='girl' />
            </div>
        </section>
    );
};

export default SearchBlock;
