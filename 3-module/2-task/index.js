/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let a = '';
    let arr = [];
    for (let i = 0; i < str.length+1; i++) {
        if (isFinite(+str[i]) ||
            str[i] == '.' ||
            str[i] == '-') {
                a += str[i];
            } else if (+a && a !== '') {
                arr.push(+a);
                a = '';          
            }
    }
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}
