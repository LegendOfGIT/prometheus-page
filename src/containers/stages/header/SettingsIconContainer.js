import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setActiveModule from '../../../actions/navigation/setActiveModule';
import SettingsIcon from '../../../components/stages/header/SettingsIcon';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setActiveModule }, dispatch);
};

export default connect(undefined, mapDispatchToProps)(SettingsIcon);
