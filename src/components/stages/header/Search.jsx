import React from 'react';
import PropTypes from 'prop-types';
import debounce from '../../../helpers/debounce';

const Search = ({ activeNavigation, searchInformationItems, translations }) => {
    const search = debounce(() => {
        searchInformationItems(activeNavigation, document.getElementById('searchPattern').value);
    }, 200);

    return <div className={'searchContainer'}>
        <input id={'searchPattern'} type={'text'} className={'searchContainer searchContainer__inputField'}
               placeholder={translations.searchTextPlaceholder} onKeyUp={() => search() } />
        <input type={'button'} className={'button searchContainer__button'}
               value={translations.searchButtonLabel} onClick={() => search()} />
       <div className={'searchContainer__icon'}>
           <img className={'searchContainer__icon--image'} src={'images/search-icon.png'} onClick={() => search()}/>
       </div>
    </div>;
}

Search.propTypes = {
    activeNavigation: PropTypes.string.isRequired,
    searchInformationItems: PropTypes.func.isRequired,
    translations: PropTypes.shape({
        searchButtonLabel: PropTypes.string.isRequired,
        searchTextPlaceholder: PropTypes.string.isRequired,
    })
};

export default Search;