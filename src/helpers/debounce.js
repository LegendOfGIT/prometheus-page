export default function (func, wait) {
    let timeout;

    return () => {
        const context = this,
            args = arguments;

        const later = () => {
            timeout = null;
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}