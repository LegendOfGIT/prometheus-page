import config from '../config';

export default (navigationId) => (dispatch) => {
    const getInformationItemsRepository =
        (config.useMocks ?? true)
            ? require('../repositories/getInformationItemsMockRepository').default
            : require('../repositories/getInformationItemsRepository').default;

    getInformationItemsRepository(undefined, navigationId)
        .then((items) => {
            dispatch({ type: 'ADD_INFORMATION_ITEMS', items })
        })
        .catch(() => {
            //  nothing to do here
        });
};
