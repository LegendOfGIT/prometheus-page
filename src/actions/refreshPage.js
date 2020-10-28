import setCurrentNavigationByRequestAddress from './navigation/setCurrentNavigationByRequestAddress';

export default () => (dispatch) => {
    setCurrentNavigationByRequestAddress()(dispatch);
};
