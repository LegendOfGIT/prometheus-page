import getInformationItemsRepository from '../repositories/getInformationItemsRepository';

export default () => (dispatch) => {
    getInformationItemsRepository()
        .then((items) => {
            dispatch({ type: 'ADD_INFORMATION_ITEMS', items })
        })
        .catch(() => {
            //  nothing to do here
        });
};
