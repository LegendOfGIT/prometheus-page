import config from '../../config';

export default (navigationId) => (dispatch) => new Promise((resolve) => {
    const getInformationItemsRepository =
        (config.useMocks ?? true)
            ? require('../../repositories/getInformationItemsMockRepository').default
            : require('../../repositories/getInformationItemsRepository').default;

    getInformationItemsRepository(undefined, navigationId)
        .then((items) => {
            dispatch({ type: 'ADD_INFORMATION_ITEMS', items })
            resolve();
        })
        .catch(() => {
            resolve();
        });
});
