import navigation from '../configs/navigation';

const defaultState = {
    activeNavigation: 'ALL',
    navigationMode: 'breadcrumbs',
    paths: navigation
};

export default (state = defaultState, action) => {
    const getNewState = (newState) => Object.assign({}, state, newState);

    const { navigationId, navigationMode } = action;

    switch (action.type) {
        case 'SET_CURRENT_NAVIGATION':
            return getNewState({
                activeNavigation: navigationId,
                navigationMode: 'breadcrumbs'
            });
        case 'SET_NAVIGATION_MODE':
            return getNewState({
                navigationMode
            });
        default:
            return state
    }
};
