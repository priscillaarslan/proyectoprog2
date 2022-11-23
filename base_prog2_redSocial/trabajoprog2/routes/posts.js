var express = require('express');
var router = express.Router();
var postsController = require ('../controllers/postsController')

let multer = require('multer');
let path = require('path');

/*configurar multer*/
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/posts'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});



module.exports = router;