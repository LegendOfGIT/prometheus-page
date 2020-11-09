export default (state, key) => {
    const userSettings = state.user.settings;
    const { displayLanguage = 'de-DE' } = userSettings;

    const translations = (state.translations || { })[displayLanguage] || {};
    return translations[key] || '';
};
