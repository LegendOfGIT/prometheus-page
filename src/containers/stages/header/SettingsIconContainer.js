import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setActiveModule from '../../../actions/navigation/setActiveModule';
import SettingsIcon from '../../../components/stages/header/SettingsIcon';
import getTranslation from "../../../helpers/getTranslation";

const mapStateToProps = (state) => {
    const { isSearchFieldActive } = state.search;

    return {
        renderIcon: !isSearchFieldActive,
        translations: {
            settingsIconLabel: getTranslation(state, 'SETTINGS_ICON_LABEL')
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setActiveModule }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsIcon);
