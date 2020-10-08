import { connect } from 'react-redux';
import Breadcrumbs from '../../components/stages/Breadcrumbs';
import getTranslation from '../../helpers/getTranslation';
import { bindActionCreators } from 'redux';
import setCurrentNavigation from '../../actions/setCurrentNavigation';
import setNavigationMode from '../../actions/setNavigationMode';
import { FIRST_LEVEL_NAVIGATION_ID } from '../../constants';

const mapStateToProps = (state) => {
    const { activeNavigation, paths } = state.navigation;
    const isLastNavigationLevel = !paths.some((path) => activeNavigation === path.from);

    let breadCrumbElements = [];

    /**
     * @param {String} navigationElement
     */
    const addParentNavigationElement = (navigationElement) => {
        if (!navigationElement) {
            return;
        }

        if ('ALL' !== navigationElement) {
            breadCrumbElements.push(navigationElement);
        }

        let parentNavigationElement = (paths.find((path) => navigationElement === path.to) || {}).from;
        parentNavigationElement = FIRST_LEVEL_NAVIGATION_ID === parentNavigationElement ? undefined : parentNavigationElement;

        if (parentNavigationElement) {
            addParentNavigationElement(parentNavigationElement);
        }
    };

    addParentNavigationElement(activeNavigation);

    breadCrumbElements = breadCrumbElements.reverse();
    breadCrumbElements = breadCrumbElements.map((breadCrumbElement) => ({
        navigationId: breadCrumbElement,
        navigationLabel: getTranslation(state, `NAVIGATION_${breadCrumbElement}`)
    }));

    return {
        isFirstNavigationLevel : FIRST_LEVEL_NAVIGATION_ID === activeNavigation,
        isLastNavigationLevel,
        breadCrumbElements,
        navigationAllLabel: getTranslation(state, 'NAVIGATION_ALL')
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setCurrentNavigation, setNavigationMode }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
