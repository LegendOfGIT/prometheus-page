import { connect } from 'react-redux';
import Breadcrumbs from '../../../components/stages/header/Breadcrumbs';
import getTranslation from '../../../helpers/getTranslation';
import { bindActionCreators } from 'redux';
import setCurrentNavigation from '../../../actions/navigation/setCurrentNavigation';
import setNavigationMode from '../../../actions/navigation/setNavigationMode';
import { FIRST_LEVEL_NAVIGATION_ID, MODULE_ID_ITEM_OVERVIEW } from '../../../constants';

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
    breadCrumbElements = breadCrumbElements.map((breadCrumbElement, index) => ({
        navigationId: breadCrumbElement,
        navigationLabel: getTranslation(state, `NAVIGATION_${breadCrumbElement}`),
        showAsLink: state.activeModule !== MODULE_ID_ITEM_OVERVIEW || index !== breadCrumbElements.length-1
    }));

    return {
        isFirstNavigationLevel :
            state.activeModule === MODULE_ID_ITEM_OVERVIEW && FIRST_LEVEL_NAVIGATION_ID === activeNavigation,
        isLastNavigationLevel,
        breadCrumbElements,
        navigationAllLabel: getTranslation(state, 'NAVIGATION_ALL')
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setCurrentNavigation, setNavigationMode }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs);
