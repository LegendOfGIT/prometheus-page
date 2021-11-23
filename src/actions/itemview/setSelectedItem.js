import setActiveModule from '../navigation/setActiveModule';
import { MODULE_ID_SINGLE_PRODUCT_VIEW } from '../../constants';
import getCurrentUserId from '../../actions/user/getCurrentUserId';
import addActivityRepository from '../../repositories/activities/addActivityRepository';
import { ACTIVITY_ID_DISPLAY_ITEM } from '../../repositories/activities/addActivityRepository';

export default (itemId) => (dispatch, getState) => new Promise((resolve) => {
    dispatch({
        type: 'SET_SELECTED_ITEM_ID',
        itemId
    });

    setActiveModule(MODULE_ID_SINGLE_PRODUCT_VIEW)(dispatch);

    getCurrentUserId()(dispatch, getState).then((currentUserId) => {
        addActivityRepository({
            activityId: ACTIVITY_ID_DISPLAY_ITEM,
            userId: currentUserId,
            itemId
        });
    });

    resolve();
});
