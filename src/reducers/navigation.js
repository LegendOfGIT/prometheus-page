import navigation from '../configs/navigation';

const defaultState = {
    activeNavigation: 'ALL',
    paths: navigation
};

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
};
