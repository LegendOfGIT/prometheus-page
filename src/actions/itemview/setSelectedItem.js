import setActiveModule from '../navigation/setActiveModule';
import { MODULE_ID_SINGLE_PRODUCT_VIEW } from '../../constants';

export default (itemId) => (dispatch) => new Promise((resolve) => {
    dispatch({
        type: 'SET_SELECTED_ITEM_ID',
        itemId
    });

    setActiveModule(MODULE_ID_SINGLE_PRODUCT_VIEW)(dispatch);

    resolve();
});
