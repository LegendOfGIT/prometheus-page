import { connect } from 'react-redux';
import SelectNavigationId from '../../../components/stages/header/SelectNavigationId';
import getTranslation from '../../../helpers/getTranslation';
import { bindActionCreators } from 'redux';
import setCurrentNavigation from '../../../actions/navigation/setCurrentNavigation';
import setNavigationMode from '../../../actions/navigation/setNavigationMode';

const mapStateToProps = (state) => {
    const { activeNavigation, paths } = state.navigation;
    const nextNavigationElements =
        paths
            .filter(path => activeNavigation === path.from)
            .map(navigationPath => ({
                navigationId: navigationPath.to,
                navigationLabel: getTranslation(state, `NAVIGATION_${navigationPath.to}`)
            }));

    return {
        navigationBackLabel: getTranslation(state, 'NAVIGATION_BACK'),
        nextNavigationElements
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setCurrentNavigation, setNavigationMode }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectNavigationId);
