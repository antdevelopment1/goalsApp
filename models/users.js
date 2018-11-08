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

// ===========
   // CREATE
// ===========

    // Create new user
    static addNewUser(name, age, gender) {
        return db.one(`insert into users (name, age, gender) values ($1, $2, $3) returning id, name, age, gender`, [name, age, gender])
            .then(result => {
                const u = new User(result.id, name, age, gender);
                console.log(u);
                return u;
            });
    }





// ================================
            // RETRIEVE
// ================================

    // Retrieve all users from user table in database
    static getAllUsers() {
         return db.any('select * from users')
            .then(allUsers => {
                const modifiedArray = allUsers.map(userObject => {
                    const u = new User (userObject.id, userObject.name, userObject.age, userObject.gender);
                    return u;
                })
                return modifiedArray;
            })
    }

    // Retrieve user by name
    static getByName(name) {
        return db.any(`select * from users where name ilike '%$1:raw%'`, [name])
            .then(result => {
                const u = new User(result[0].id, result[0].name, result[0].age, result[0].gender);
                return u;
        })
    }

    // Get user by id
    static getById(id) {
        return db.any(`select * from users where id = $1`, [id])
        .then(result => {
            const u = new User(result[0].id, result[0].name, result[0].age, result[0].gender);
            return u;
        })
    }

    // // Get user by age
    static getByAge(age) {
        return db.any(`select * from users where age > $1`, [age])
            .then (result => {
                let  index = 0;
                const oldPeople = result.map(user => {
                   const u = new User(result[index].id, result[index].name, result[index].age, result[index].gender);
                   index++;
                   return u;
                }) 
                return oldPeople;
            })
    }

    // Gets number of users that are male or female
    static getAllUsersByGender(gender) {
        let upperGender = gender.toUpperCase();
        return db.any(`select count(*) from users where gender = $1`, [upperGender])
        .then(result => {
            return result[0].count;
        })
    }

// =============
    // UPDATE
// =============

    // Update user






// =============
    // DELETE
// =============

    // Delete new user
    static deleteById(id) {
        return db.result(`delete from users where id = $1`, [id])
    }

    
}


module.exports = User;