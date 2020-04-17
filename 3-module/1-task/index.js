/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let allUsers = "";
      for(let user of data){
        if (user.age <= age) allUsers += `${user.name}, ${user.balance}\n`;
      }
      return allUsers.slice(0, -1);
}