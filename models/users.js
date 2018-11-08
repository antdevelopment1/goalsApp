// Imports pg-promise npm
const db = require('./db');

// Creates class to store methods
class User {

    // Constructor for new instances that accept four arguments (id, name, age, gender)
    constructor(id, name, age, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Formats result from method call to be able to interpolate an object
    toString() {
        return ` Name: ${this.name.toUpperCase()} | ID: ${this.id} | Gender: ${this.gender} | Age: ${this.age}  `;
    }



}


module.exports = User;