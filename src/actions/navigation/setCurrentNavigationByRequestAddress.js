import navigation from '../../configs/navigation';
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

    let firstMatchingNavigationPath = navigation.filter((navigationItem) => {
        return -1 !== navigationItem.path.indexOf(pathname);
    })[0];

    if (firstMatchingNavigationPath) {
        setCurrentNavigation(firstMatchingNavigationPath.to)(dispatch);
    }
};
