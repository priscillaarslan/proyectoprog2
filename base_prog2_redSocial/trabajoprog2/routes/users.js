var express = require("express");
var router = express.Router();
let usersController = require("../controllers/usersController");

let multer = require('multer');
let path = require('path');

/* Configurar multer */
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/usuarios'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});
let upload = multer({storage: storage});
/* GET users listing. */
router.get("/login", usersController.Login);
router.post("/login", usersController.loginPost);
router.get("/miPerfil", usersController.miPerfil);
router.get("/registracion", usersController.registracion);
router.post("/registracion", upload.single('foto'), usersController.registrar);
router.get("/editarPerfil", usersController.editarPerfil);
router.post("/modificarPerfil",  upload.single('foto'), usersController.modificarPerfil);
router.get("/seguir/:id", usersController.seguir);
router.get("/noSeguir/:id", usersController.noSeguir);
router.get("/logout", usersController.logout);


/* A la ruta le estamos incluyendo parametros que van a modificar 
que es lo que estamos haciendo dentro de esa ruta */
/* Las rutas con parametro van al final porque la ruta anterior espera un parametro.
 SIEMPRE LAS RUTAS CON PARAMETRO VAN ULTIMAS.  */
router.get("/detalleUsuario/:id", usersController.detalleUsuario);


module.exports = router;