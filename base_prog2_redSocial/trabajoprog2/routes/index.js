var express = require('express');
var router = express.Router();
var indexController = require ('../controllers/indexController')

/* GET home page. */ /* NOTA: Para que direccion en la url hacemos tal metodo ('/')*/
router.get('/', indexController.home);

router.get('/busqueda', indexController.busqueda);
/* el primer busqueda habla del url donde nos dirigimos y el segundo del metodo que vamos a ejecutar*/


module.exports = router;
