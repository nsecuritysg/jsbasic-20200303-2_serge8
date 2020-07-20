/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    document.body.innerHTML = '<ul></ul>';
    for (let i = 0; i <= friends.length - 1; i++) {
      document.body.firstElementChild.innerHTML += '<li>' +  friends[i].firstName + ' ' + friends[i].lastName + '</li>';
    }
    return (document.body.firstChild);
}
