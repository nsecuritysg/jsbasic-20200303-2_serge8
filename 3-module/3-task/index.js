/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    return str
        .split('-')
        .map(
            (item, index) => index !== 0 ? item.slice(0,1).toUpperCase() + item.slice(1) : item
            )
        .join('');
}
