/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
    let empty = true;
    for (let key in obj) {
        if (key in obj)  empty = false;
    }
    return empty;
}