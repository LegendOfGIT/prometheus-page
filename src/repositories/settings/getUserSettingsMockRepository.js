import userSettingsMock from '../../__data__/user-settings-mock';

export default (currentUserId) => new Promise((resolve) => {
    resolve(userSettingsMock[currentUserId] || {});
});
