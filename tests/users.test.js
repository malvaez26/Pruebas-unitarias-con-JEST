// You already have the methods imported
const users = require('../data');
const { getUsersById, getUsersByUsername, validatePassword } = require('../users');

describe('User functions tests', () => {
    it('Should get the user by its id', () => {
        const user = getUsersById(1);
        expect(user).toEqual({
            id: 1,
            username:'hpLover4',
            email: 'sirious90@gmail.com',
            password: 'hArrydotCom'
        })
    })
})



// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation