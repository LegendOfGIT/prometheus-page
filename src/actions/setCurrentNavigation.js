import loadInformationItems from './loadInformationItems';

export default (navigationId = 'ALL') => (dispatch) => {
    dispatch({
        type: 'SET_CURRENT_NAVIGATION',
        navigationId
    });

    loadInformationItems(navigationId)(dispatch);
};
