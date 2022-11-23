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

/* GET home page. */ /* NOTA: Para que direccion en la url hacemos tal metodo ('/')*/
router.get('/agregarPost', postsController.agregarPost);
router.post('/crearPost',  upload.single('foto'), postsController.crearPost);
router.get('/detallePost/:id', postsController.detallePost);
router.get('/borrarPost/:id', postsController.borrarPost);
router.get('/editarPost/:id', postsController.editarPost);
router.post('/modificarPost/:id', postsController.modificarPost);
router.post('/comentario/:id', postsController.comentario);

module.exports = router;