import React from 'react';
import PropTypes from 'prop-types';
import debounce from '../../../helpers/debounce';

const Search = ({ activeNavigation, searchButtonLabel, searchInformationItems, searchTextPlaceholder }) => {
    const search = debounce(() => {
        searchInformationItems(activeNavigation, document.getElementById('searchPattern').value);
    }, 200);

    return <div className={'searchContainer'}>
        <input id={'searchPattern'} type={'text'} className={'searchContainer__inputField'}
               placeholder={searchTextPlaceholder} onKeyUp={() => search() } />
        <input type={'button'} className={'button searchContainer__button'}
               value={searchButtonLabel} onClick={() => search()} />
    </div>;
}

Search.propTypes = {
    activeNavigation: PropTypes.string.isRequired,
    searchButtonLabel: PropTypes.string.isRequired,
    searchTextPlaceholder: PropTypes.string.isRequired,
    searchInformationItems: PropTypes.func.isRequired
};

export default Search;