import { connect } from 'react-redux';
import Navigation from '../../components/stages/Navigation';
import getTranslation from '../../helpers/getTranslation';

const mapStateToProps = (state) => {
    const activeNavigation = state.navigation.activeNavigation;
    const navigationPaths = state.navigation.paths;
    const isLastNavigationLevel = !navigationPaths.some((path) => activeNavigation === path.from);

    return {
        isLastNavigationLevel,
        navigationAllLabel: getTranslation(state, 'NAVIGATION_ALL')
    };
};

export default connect(mapStateToProps)(Navigation);
