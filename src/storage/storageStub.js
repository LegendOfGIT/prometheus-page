const storageStub = (function() {
    function getItem() {
        return null;
    }

    function setItem() {}

    return {
        getItem,
        setItem
    };
})();

export default storageStub;
