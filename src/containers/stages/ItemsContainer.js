import { connect } from 'react-redux';
import Items from '../../components/stages/Items';
import loadInformationItems from '../../actions/loadInformationItems';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        informationItems: (state.informationItems || []).filter(item => item['title-image'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadInformationItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
