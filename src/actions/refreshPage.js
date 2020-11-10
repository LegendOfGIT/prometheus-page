import setCurrentNavigationByRequestAddress from './navigation/setCurrentNavigationByRequestAddress';
import loadUserSettingsFromStorage from "./settings/loadUserSettingsFromStorage";

export default () => (dispatch) => new Promise((resolve) => {
    setCurrentNavigationByRequestAddress()(dispatch);
    loadUserSettingsFromStorage()(dispatch);
    resolve();
});
