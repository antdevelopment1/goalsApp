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

    