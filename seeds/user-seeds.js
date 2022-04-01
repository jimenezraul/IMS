const { User } = require("../../models");

const userData = [
    {
        "username": "Raul",
        "email": "raul@example.com",
        "password": "password",
    },
    {
        "username": "Michelle",
        "email": "michelle@example.com",
        "password": "password",
    },
    {
        "username": "Olga",
        "email": "olga@example.com",
        "password": "password",
    },
    {
        "username": "Santiago",
        "email": "santiago@example.com",
        "password": "password",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
