export default (state = 'item-overview', action) => {
    switch (action.type) {
        case 'SET_ACTIVE_MODULE': {
            return action.activeModule;
        }
        default:
            return state
    }
};
