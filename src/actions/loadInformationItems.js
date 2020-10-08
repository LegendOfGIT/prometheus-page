import getInformationItemsRepository from '../repositories/getInformationItemsRepository';

export default (navigationId) => (dispatch) => {
    getInformationItemsRepository(undefined, navigationId)
        .then((items) => {
            dispatch({ type: 'ADD_INFORMATION_ITEMS', items })
        })
        .catch(() => {
            //  nothing to do here
        });
};
