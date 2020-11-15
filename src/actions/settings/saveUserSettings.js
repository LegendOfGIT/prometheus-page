import storageStub from '../../storage/storageStub';

const storage = localStorage || storageStub;

export default (settings) => (dispatch) => new Promise((resolve) => {
    dispatch({
        type: 'SAVE_USER_SETTINGS',
        settings
    });

    storage.setItem('displayLanguage', settings.displayLanguage);

    resolve();
});
