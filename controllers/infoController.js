const Images = require('../models/infoModel.js');

const { getPostData } = require('../utils.js');

//gets all images
//direct request to API
async function getImages(req, res) {
    try{
        const images = await Images.find();
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(images));
    }catch (error){
        console.log(error);
    }
}

//gets an image
//direct request to API
async function getImage(req, res, id) {
    try{
        const image = await Images.findById(id);
        if(!image){
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Product not Found'}));
        }else{
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(image));
        }
    }catch (error){
        console.log(error);
    }
}

//adds an image
//POST /api/images
async function createImage(req, res) {
    try {
        const body = await getPostData(req);

        const{ imgUrl } = JSON.parse(body);

        const image = {
            imgUrl
         };

         const newImage = await Images.create(image);
         res.writeHead(201, {'Content-Type': 'application/json'})
         return res.end(JSON.stringify(newImage));
    
    }catch (error){
        console.log(error);
    }
}

async function updateImage(req, res, id) {
    try {
        const image = await Images.findById(id);
        if(!image){
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Product not Found'}));
        }else{
            const body = await getPostData(req);

        const{ imgUrl } = JSON.parse(body);

        const imageData = {
            imgUrl: imgUrl || image.imgUrl
         };

         const updImage = await Images.update(id, imageData);
         res.writeHead(200, {'Content-Type': 'application/json'})
         return res.end(JSON.stringify(updImage));
        }
    }catch (error){
        console.log(error);
    }
}

async function deleteImage(req, res, id) {
    try {
        const image = await Images.findById(id);
        if(!image){
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Product not Found'}));
        }else{
           await Images.remove(id);
           res.writeHead(200, {'Content-Type': 'application/json'});
           res.end(JSON.stringify({message: `Image ${id} removed`}));
        }
    }catch (error){
        console.log(error);
    }
}

module.exports = {
    getImages,
    getImage,
    createImage,
    updateImage,
    deleteImage
}