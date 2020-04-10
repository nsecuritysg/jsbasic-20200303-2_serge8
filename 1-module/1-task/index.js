/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n < 0) {
        alert('Отрицательное число');
        return;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
