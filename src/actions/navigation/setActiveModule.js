import navigation from '../../configs/navigation';

export default (activeModule) => (dispatch) => {
    dispatch({
        type: 'SET_ACTIVE_MODULE',
        activeModule
    });

    const navigationItem = navigation.find((item) => item.moduleId === activeModule);
    if (navigationItem) {
        window.history.replaceState({}, undefined, navigationItem.path);
    }
};
