import getUserSettingsMockRepository from '../../repositories/settings/getUserSettingsMockRepository';
import config from '../../config';
import getUserSettingsRepository from "../../repositories/settings/getUserSettingsRepository";
import saveUserSettings from './saveUserSettings';

export default (currentUserId) => (dispatch) => new Promise((resolve) => {
    const { useMocks = true } = config;
    const repository = useMocks ? getUserSettingsMockRepository(currentUserId) : getUserSettingsRepository(currentUserId);

    repository.then((settings) => {
        saveUserSettings(settings)(dispatch);
        resolve();
    });
});
