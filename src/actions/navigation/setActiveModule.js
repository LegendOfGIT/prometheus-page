import navigation from '../../configs/navigation';
import setCurrentState from '../setCurrentState';
import {STATE_IDLE, STATE_PENDING} from '../../constants';

export default (activeModule) => (dispatch) => {
    dispatch({
        type: 'SET_ACTIVE_MODULE',
        activeModule
    });

    setCurrentState(STATE_PENDING)(dispatch);
    setTimeout(() => {
        setCurrentState(STATE_IDLE)(dispatch);
    }, 1500);

    const navigationItem = navigation.find((item) => item.moduleId === activeModule);
    if (navigationItem) {
        window.history.replaceState({}, undefined, navigationItem.path);
    }
};
