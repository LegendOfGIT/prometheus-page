import config from '../config.js';

export default (navigationId, searchPattern) => (dispatch) => {
    const getInformationItemsRepository =
        (config.useMocks ?? true)
            ? require('../repositories/getInformationItemsMockRepository').default
            : require('../repositories/getInformationItemsRepository').default;

    getInformationItemsRepository(searchPattern, navigationId)
        .then((items) => {
            dispatch({ type: 'ADD_INFORMATION_ITEMS', items })
        })
        .catch(() => {
            //  nothing to do here
        });
};
