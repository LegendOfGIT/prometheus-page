import loadInformationItems from '../items/loadInformationItems';
import navigation from '../../configs/navigation';
import setActiveModule from './setActiveModule';
import { MODULE_ID_ITEM_OVERVIEW } from '../../constants';

export default (navigationId = 'ALL') => (dispatch) => {
    dispatch({
        type: 'SET_CURRENT_NAVIGATION',
        navigationId
    });

    const navigationItem = navigation.find((item) => item.to === navigationId);
    window.history.replaceState({}, undefined, navigationItem ? navigationItem.path : '/');

    setActiveModule(MODULE_ID_ITEM_OVERVIEW)(dispatch);
    loadInformationItems(navigationId)(dispatch);
};
