export default (state, key) => {
    const translations = (state.translations || { })['de-DE'] || {};
    return translations[key] || '';
};
