import navigation from '../../configs/navigation';
import setActiveModule from './setActiveModule';
import setCurrentNavigation from './setCurrentNavigation';

export default () => (dispatch) => {
    let { pathname } = document.location;

    const removeLeadingSlash = (path) => path.startsWith('/') ? path.substr(1) : path;
    const removeTrailingSlash = (path) => path.slice(-1) === '/' ? path.slice(0, -1) : path;

    pathname = removeLeadingSlash(removeTrailingSlash(pathname));

    if (!pathname.replace('/', '')) {
        setCurrentNavigation()(dispatch);
        return;
    }

    const firstMatchingNavigationPath = navigation.filter((navigationItem) => {
        return -1 !== navigationItem.path.indexOf(pathname);
    })[0];

    if (!firstMatchingNavigationPath) {
        setCurrentNavigation()(dispatch);
        return;
    }

    if (firstMatchingNavigationPath) {
        const { moduleId } = firstMatchingNavigationPath;

        if (moduleId) {
            setActiveModule(moduleId)(dispatch);
            return;
        }

        setCurrentNavigation(firstMatchingNavigationPath.to)(dispatch);
    }
};
