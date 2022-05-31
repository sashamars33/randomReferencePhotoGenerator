let images = require('../data/info.json');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils.js');


function find() {
    return new Promise((resolve,reject) => {
        resolve(images);
    });
};

function findById(id) {
    return new Promise((resolve, reject) => {
        const image = images.find(i => i.id === id);
        resolve(image);
    })
}

function create(image) {
    return new Promise((resolve, reject) => {
        const newImage = {id: uuidv4(), ...image};
        images.push(newImage);
        writeDataToFile('./data/info.json', images);
        resolve(newImage);
    })
}

function update(id, image) {
    return new Promise((resolve, reject) => {
       const index = images.findIndex((i) => i.id === id);
       images[index] = {id, ...image};
        writeDataToFile('./data/info.json', images);
        resolve(images[index]);
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        images = images.filter(i => i.id !== id);
        writeDataToFile('./data/info.json', images);
        resolve();
    })
}


module.exports = {
    find,
    findById,
    create,
    update,
    remove
}