import loadInformationItems from '../items/loadInformationItems';
import setActiveModule from './setActiveModule';

export default (navigationId = 'ALL') => (dispatch) => {
    dispatch({
        type: 'SET_CURRENT_NAVIGATION',
        navigationId
    });

    setActiveModule('item-overview')(dispatch);
    loadInformationItems(navigationId)(dispatch);
};
