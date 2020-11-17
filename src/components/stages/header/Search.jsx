import React from 'react';
import PropTypes from 'prop-types';
import debounce from '../../../helpers/debounce';

const Search = ({ activeNavigation, isSearchFieldActive, searchInformationItems, setIsSearchFieldActive, translations }) => {
    const search = debounce(() => {
        searchInformationItems(activeNavigation, document.getElementById('searchPattern').value);
    }, 200);

    return <div className={'searchContainer'}>
        <input
            id={'searchPattern'}
            type={'text'}
            className={`searchContainer searchContainer__inputField${isSearchFieldActive ? '' : '--inactive'}`}
            placeholder={translations.searchTextPlaceholder}
            onKeyUp={() => search() }
        />
        <input
            type={'button'}
            className={'button searchContainer__button'}
            value={translations.searchButtonLabel}
            onClick={() => search()}
        />

        <div className={`prometheus-header__search prometheus-header__search${isSearchFieldActive ? '--active' : ''}`}>
           <img
               className={'prometheus-header__search--icon'}
               src={'images/search-icon.png'}
               onClick={() => { setIsSearchFieldActive(!isSearchFieldActive); }}
           />
        </div>
    </div>;
}

Search.propTypes = {
    activeNavigation: PropTypes.string.isRequired,
    isSearchFieldActive: PropTypes.bool.isRequired,
    searchInformationItems: PropTypes.func.isRequired,
    setIsSearchFieldActive: PropTypes.func.isRequired,
    translations: PropTypes.shape({
        searchButtonLabel: PropTypes.string.isRequired,
        searchTextPlaceholder: PropTypes.string.isRequired,
    })
};

export default Search;