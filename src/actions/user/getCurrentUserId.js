import generateNewUserIdMockRepository from '../../repositories/user/generateNewUserIdMockRepository';
import generateNewUserIdRepository from '../../repositories/user/generateNewUserIdRepository';
import storageStub from '../../storage/storageStub';
import config from '../../config';

const storage = localStorage || storageStub;

export default () => (dispatch, getState) => new Promise((resolve) => {
    const { user } = getState();

    let { currentUserId, guestUserId = '' } = user;
    const guestUserIdPromise = guestUserId ? Promise.resolve(guestUserId) : new Promise((resolve) => {
        const repository = (config.useMocks ?? true) ? generateNewUserIdMockRepository() : generateNewUserIdRepository();
        repository.then((userId) => {
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
