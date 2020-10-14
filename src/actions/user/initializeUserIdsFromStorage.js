import storageStub from '../../storage/storageStub';
const storage = localStorage || storageStub;

export default () => (dispatch) => {
    dispatch({
        type: 'SET_CURRENT_USER_ID',
        userId: storage.getItem('currentUserId')
    });

    dispatch({
        type: 'SET_GUEST_USER_ID',
        userId: storage.getItem('guestUserId')
    });
};
