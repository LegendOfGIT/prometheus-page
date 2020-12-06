import { STATE_IDLE } from '../constants';

const defaultState = STATE_IDLE;

export default (state = defaultState, action) => {
    const { currentState } = action;

    switch (action.type) {
        case 'SET_CURRENT_STATE':
            return currentState;
        default:
            return state;
    }
};
