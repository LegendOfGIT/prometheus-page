import { connect } from 'react-redux';
import Items from '../../../components/stages/header/Search';
import searchInformationItems from '../../../actions/items/searchInformationItems';
import setCurrentState from '../../../actions/setCurrentState';
import setIsSearchFieldActive from '../../../actions/search/setIsSearchFieldActive';
import { bindActionCreators } from 'redux';
import getTranslation from '../../../helpers/getTranslation';

const mapStateToProps = (state) => {
    const { activeNavigation } = state.navigation;
    const { isSearchFieldActive } = state.search;

    return {
        activeNavigation,
        isSearchFieldActive,
        translations: {
            searchButtonLabel: getTranslation(state, 'SEARCH_SEARCH_BUTTON_LABEL'),
            searchTextPlaceholder: getTranslation(state, 'SEARCH_SEARCH_TEXT_PLACEHOLDER')
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchInformationItems, setCurrentState, setIsSearchFieldActive }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
