import { connect } from 'react-redux';
import Settings from '../../../components/stages/settings/Settings';
import {MODULE_ID_SETTINGS} from '../../../constants';

const mapStateToProps = (state) => {
    return {
        renderModule: MODULE_ID_SETTINGS === state.activeModule
    };
};

export default connect(mapStateToProps)(Settings);
