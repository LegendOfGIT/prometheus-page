export default (state, key) => {
    const translations = (state.translations || { })['de-DE'] || ['el-GR'] || {};
    return translations[key] || '';
};
