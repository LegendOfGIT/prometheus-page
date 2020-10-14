import generateNewUserIdMockRepository from '../../repositories/user/generateNewUserIdMockRepository';
import storageStub from '../../storage/storageStub';

const storage = localStorage || storageStub;

export default () => (dispatch, getState) => new Promise((resolve) => {
    const { user } = getState();

    let { currentUserId, guestUserId = '' } = user;
    const guestUserIdPromise = guestUserId ? Promise.resolve(guestUserId) : new Promise((resolve) => {
        generateNewUserIdMockRepository().then((userId) => {
            dispatch({
                type: 'SET_GUEST_USER_ID',
                userId
            });

            resolve(userId);
        });
    });

    guestUserIdPromise.then((guestUserId) => {
        storage.setItem('guestUserId', guestUserId);
        storage.setItem('currentUserId', currentUserId);

        resolve(currentUserId || guestUserId);
    });
});
