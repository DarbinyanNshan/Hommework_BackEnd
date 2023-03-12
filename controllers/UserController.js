const { USERS } = require('../constants') 

const express = require('express');
const app = express(); 

exports.getUsers = (req, res) =>{
    const data = JSON.stringify(USERS);
    res.end(data);
}

exports.getUserById = (req, res) =>{
    const {id} = (req.params);
    const user = USERS.find(user => user.id === + id);
    const data = JSON.stringify(user);
    res.end(data);
}