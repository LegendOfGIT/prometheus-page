import storageStub from '../../storage/storageStub';

const storage = localStorage || storageStub;

export default () => (dispatch) => new Promise((resolve) => {
    dispatch({
        type: 'SAVE_USER_SETTINGS',
        settings: {
            displayLanguage: storage.getItem('displayLanguage') || 'de-DE'
        }
    });

    resolve();
});
