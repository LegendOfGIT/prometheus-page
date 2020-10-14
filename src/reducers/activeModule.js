import { MODULE_ID_ITEM_OVERVIEW } from '../constants';

export default (state = MODULE_ID_ITEM_OVERVIEW, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_MODULE': {
            return action.activeModule;
        }
        default:
            return state
    }
};
