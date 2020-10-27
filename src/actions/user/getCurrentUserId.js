import storageStub from '../../storage/storageStub';
import { v4 as uuid } from 'uuid';
import config from '../../config';

const storage = localStorage || storageStub;

export default () => (dispatch, getState) => new Promise((resolve) => {
    const { user } = getState();

    const { useMocks } = config;
    let { currentUserId, guestUserId } = user;

    if (useMocks) {
        guestUserId = '123';
    }

    if (!guestUserId) {
        guestUserId = uuid();

        dispatch({
            type: 'SET_GUEST_USER_ID',
            userId: guestUserId
        });
    }

    storage.setItem('guestUserId', guestUserId);
    storage.setItem('currentUserId', currentUserId);

    resolve(currentUserId || guestUserId);
});
