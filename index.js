// dovenv(enviornment) dependency that will track import store values from hidden .env file
require('dotenv').config();

// Imports users and goals js files
const user = require('./models/users');
const goals = require('./models/goals');

// ===========
   // CREATE
// ===========

    // Create new user
    user.addNewUser('Samantha Collins', 42, 'FEMALE')
        .then(result => {
            console.log('THIS USER HAS BEEN ADDED: |' + result);
        })


// =============
   // RETRIEVE
// =============

    // Retrieve all users function call
    user.getAllUsers()
        .then(returnValue => {
            console.log(`HERE IS A LIST OF ALL THE USERS FROM THE USERS TABLE | ${returnValue}`);
        })

    // Get user by name
    user.getByName('Justin Timberlake')
        .then(name => {
            console.log(`HERE IS THE USER BASED ON SELECTED NAME | ${name}`);
        })

    // Get user by id
    user.getById(2)
        .then(id => {
            console.log(`HERE IS THE USER BASED ON SELECTED ID | ${id}`);
        })

    // Get users with an age greater than 30
    user.getByAge(30)
        .then(age => {
            console.log(`HERE IS EVERYONE WITH AN AGE OVER 30:\n ${age}`);
        })

    // Get user by gender
        user.getAllUsersByGender('female')
            .then(count => {
                console.log(`HERE IS THE COUNT FOR THE NUMBER OF USERS THAT ARE MALE OR FEMALE\n ${count}`);
            })





// =============
    // UPDATE
// =============

    // Update user



// ==============
    // DELETE
// =============

    // Delete user
    user.deleteById(9)
        .then(result => {
            console.log(result.rowCount);
        })
