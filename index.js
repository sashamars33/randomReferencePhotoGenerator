const http = require('http');
const path = require("path");
const fs = require('fs');
const { getImages, getImage, createImage, updateImage, deleteImage  } = require('./controllers/infoController');

const server = http.createServer((req,res) => {
  console.log(req.url);
  if(req.url === '/api/images' && req.method === 'GET'){
    getImages(req, res);

  }else if(req.url.match(/\api\/images\/([0-9]+)/) && req.method === 'GET'){
    const id = req.url.split('/')[3];
    getImage(req, res, id);

  }else if(req.url === '/api/images' && req.method === 'POST'){
    createImage(req, res);

  }else if(req.url.match(/\api\/images\/([0-9]+)/) && req.method === 'PUT'){
    const id = req.url.split('/')[3];
    updateImage(req, res, id);

  }else if(req.url.match(/\api\/images\/([0-9]+)/) && req.method === 'DELETE'){
    const id = req.url.split('/')[3];
    deleteImage(req, res, id);

  }else{
    let filePath = path.join(
      __dirname,
      req.url === "/" ? "index.html" : req.url
    );
    let extname = path.extname(filePath);
    let contentType = "text/html";
    switch (extname) {
      case ".js":
        contentType = "text/javascript";
        break;
      case ".css":
        contentType = "text/css";
        break;
      case ".json":
        contentType = "application/json";
        break;
      case ".png":
        contentType = "image/png";
        break;
      case ".jpg":
        contentType = "image/jpg";
        break;
    }
    if (contentType == "text/html" && extname == "") filePath += ".html";
    console.log(filePath);

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code == "ENOENT") {
          // Page not found
          fs.readFile(
            path.join(__dirname, "public", "404.html"),
            (err, content) => {
              res.writeHead(404, { "Content-Type": "text/html" });
              res.end(content, "utf8");
            }
          );
        } else {
          //  Some server error
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        // Success
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf8");
      }
    });
    // res.writeHead(404, { 'Content-Type': 'application/josn'});
    // res.end(JSON.stringify( { message: 'Route not found'} ));
  }
});

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));