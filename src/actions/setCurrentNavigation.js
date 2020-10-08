import loadInformationItems from './loadInformationItems';

export default (navigationId) => (dispatch) => {
    dispatch({
        type: 'SET_CURRENT_NAVIGATION',
        navigationId
    });

    loadInformationItems(navigationId)(dispatch);
};
