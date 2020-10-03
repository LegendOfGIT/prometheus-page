import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchButtonLabel, searchInformationItems, searchTextPlaceholder }) => {
    const search = () => {
        searchInformationItems(document.getElementById('searchPattern').value);
    };

    return <div className={'searchContainer'}>
        <input id={'searchPattern'} type={'text'} placeholder={searchTextPlaceholder} onKeyUp={() => search()} />
        <input type={'button'} className={'button'} value={searchButtonLabel} onClick={() => search()} />
    </div>;
}

Search.propTypes = {
    searchButtonLabel: PropTypes.string.isRequired,
    searchTextPlaceholder: PropTypes.string.isRequired,
    searchInformationItems: PropTypes.func.isRequired
};

export default Search;