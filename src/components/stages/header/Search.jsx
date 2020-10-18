import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ activeNavigation, searchButtonLabel, searchInformationItems, searchTextPlaceholder }) => {
    const search = () => {
        searchInformationItems(activeNavigation, document.getElementById('searchPattern').value);
    };

    return <div className={'searchContainer'}>
        <input id={'searchPattern'} type={'text'} placeholder={searchTextPlaceholder} onKeyUp={() => search()} />
        <input type={'button'} className={'button'} value={searchButtonLabel} onClick={() => search()} />
    </div>;
}

Search.propTypes = {
    activeNavigation: PropTypes.string.isRequired,
    searchButtonLabel: PropTypes.string.isRequired,
    searchTextPlaceholder: PropTypes.string.isRequired,
    searchInformationItems: PropTypes.func.isRequired
};

export default Search;