import getInformationItemsRepository from '../repositories/getInformationItemsRepository';

export default (navigationId, searchPattern) => (dispatch) => {
    getInformationItemsRepository(searchPattern, navigationId)
        .then((items) => {
            dispatch({ type: 'ADD_INFORMATION_ITEMS', items })
        })
        .catch(() => {
            //  nothing to do here
        });
};
