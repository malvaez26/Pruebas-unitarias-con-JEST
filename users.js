// Imports small array of users
// Pretend it's an API request
const users = require('./data');

// // Fetches all users
// const getUsers = () => {
//     return users;
// }

// // Filters users by specific ID
// const getUser = id => {
//     return users.find(user => user.id === id)
// }


// test
// console.log(getUser(3));

// module.exports = {getUsers , getUser};

function getUsersById(id) {
    return users.find(user => user.id === id);
}

function getUsersByUsername(username) {
    return user.find(user => user.username === username);
}

function validatePassword(userId, password) {
    const user = getUsersById(userId);
    return user ? user.password === password : false;
}

module.exports = { getUsersById, getUsersByUsername, validatePassword }