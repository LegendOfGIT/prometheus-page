import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = ({ activeNavigation, isSearchFieldActive, searchInformationItems, setIsSearchFieldActive, translations }) => {
    const search = () => {
        if (isSearchFieldActive) {
            searchInformationItems(activeNavigation, document.getElementById('searchPattern').value);
        }

        setIsSearchFieldActive(!isSearchFieldActive);
    };

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (isSearchFieldActive) {
            document.getElementById('searchPattern').focus();
        }
    });


    return <div className={'searchContainer'}>
        <div className={ isSearchFieldActive ? 'searchContainer__inputFieldBack' : 'searchContainer--inactive'}>
            <img
                className={'searchContainer__inputFieldBack--icon'}
                src={'images/back-arrow.png'}
                onClick={() => { setIsSearchFieldActive(!isSearchFieldActive); }}
            />
        </div>

        <input
            id={'searchPattern'}
            tabIndex={-1}
            type={'text'}
            className={`searchContainer ${isSearchFieldActive ? 'searchContainer__inputField' : 'searchContainer--inactive'}`}
            placeholder={translations.searchTextPlaceholder}
            onKeyUp={(e) => { if (e.key === 'Enter') { search(); }}}
        />

        <div className={`prometheus-header__search prometheus-header__search${isSearchFieldActive ? '--active' : ''}`}>
           <img
               className={'prometheus-header__search--icon'}
               src={'images/search-icon.png'}
               onClick={() => { search(); }}
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