import getInformationItemsRepository from '../repositories/getInformationItemsRepository';

export default (searchPattern) => (dispatch) => {
    getInformationItemsRepository(searchPattern)
        .then((items) => {
            dispatch({ type: 'ADD_INFORMATION_ITEMS', items })
        })
        .catch(() => {
            //  nothing to do here
        });
};
