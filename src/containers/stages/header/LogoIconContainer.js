import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setActiveModule from '../../../actions/navigation/setActiveModule';
import LogoIcon from '../../../components/stages/header/LogoIcon';

const mapStateToProps = (state) => {
    const { isSearchFieldActive } = state.search;

    return {
        renderIcon: !isSearchFieldActive
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setActiveModule }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoIcon);
