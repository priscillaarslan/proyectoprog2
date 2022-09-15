var express = require('express');
var router = express.Router();
var postsController = require ('../controllers/postsController')


/* GET home page. */ /* NOTA: Para que direccion en la url hacemos tal metodo ('/')*/
router.get('/agregarPost', postsController.agregarPost);
router.get('/detallePost', postsController.detallePost);

module.exports = router;