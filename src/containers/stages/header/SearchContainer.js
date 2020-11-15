import { connect } from 'react-redux';
import Items from '../../../components/stages/header/Search';
import searchInformationItems from '../../../actions/items/searchInformationItems';
import { bindActionCreators } from 'redux';
import getTranslation from '../../../helpers/getTranslation';

const mapStateToProps = (state) => {
    const { activeNavigation } = state.navigation;

    return {
        activeNavigation,
        translations: {
            searchButtonLabel: getTranslation(state, 'SEARCH_SEARCH_BUTTON_LABEL'),
            searchTextPlaceholder: getTranslation(state, 'SEARCH_SEARCH_TEXT_PLACEHOLDER')
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchInformationItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
