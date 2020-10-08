import { connect } from 'react-redux';
import Items from '../../components/stages/Search';
import searchInformationItems from '../../actions/searchInformationItems';
import { bindActionCreators } from 'redux';

const mapStateToProps = () => {
    return {
        searchButtonLabel: 'suchen',
        searchTextPlaceholder: 'Suchbegriff'
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchInformationItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
