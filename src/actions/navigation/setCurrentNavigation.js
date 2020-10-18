import loadInformationItems from '../items/loadInformationItems';
import setActiveModule from './setActiveModule';
import { MODULE_ID_ITEM_OVERVIEW } from '../../constants';

export default (navigationId = 'ALL') => (dispatch) => {
    dispatch({
        type: 'SET_CURRENT_NAVIGATION',
        navigationId
    });

    setActiveModule(MODULE_ID_ITEM_OVERVIEW)(dispatch);
    loadInformationItems(navigationId)(dispatch);
};
