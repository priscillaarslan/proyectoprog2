  //requires : es para mandarle la data del modelo al controlador, ahora hay que mandar del controlador a la vista.
//para pasarselo a la vista, al render le pasamos parametros
const data = require('../database/models');
const User = data.Usuario;
const bycript = require('bcryptjs');
const op = data.Sequelize.Op;

//metodos
const usersController = {
  detalleUsuario: function (req, res) {
    let id = req.params.id

    data.Usuario.findOne({
      include: {
        all: true,
        nested:true
      }
    }, {
      where: {
        id: id
      }
    })
    .then(usuario => {
      res.render('detalleUsuario', { usuario: usuario });
    })

    // let usuario = data.Usuario.find(usuario => usuario.id == id)
    // let posteos = data.posteos.filter(posteo => posteo.idUsuario == id)
    // console.log(posteos);
  },
  Login: function (req, res) {
    res.render('login');
  },

  loginPost: (req, res) => {

    let errors = {};

    if (req.body.email == "") {
      errors.message = "El campo email esta vacio";
      res.locals.errors = errors;
      return res.render('login');
    }
    else if (req.body.password == "") {
      errors.message = "El campo contraseña esta vacio";
      res.locals.errors = errors;
      return res.render('login');
    }
    else {

      let info = req.body;

      let filtro = {
        where: [{ email: info.email }]
      }
      User.findOne(filtro)
        .then((result) => {
          if (result != null) {
            let passEncriptada = bycript.compareSync(info.password, result.password);
            if (passEncriptada) {
              req.session.user = result.dataValues;

              if (info.recordar != undefined) {
                res.cookie('userId', result.dataValues.id, { maxAge: 1000 * 60 * 10 })
              }

              return res.redirect('/');
            }
            else {
              errors.message = "El campo contraseña es invalido";
              res.locals.errors = errors;
              return res.render('login');
            }
          }
          else {
            errors.message = "El campo email es invalido";
            res.locals.errors = errors;
            return res.render('login');
          }
        })
        .catch(error => {
          console.log(error)
          res.send(error)
        })
    }

  },

  miPerfil: function (req, res) {

    return res.send("ok")
  },

  registracion: function (req, res) {
    res.render('registracion');
  },

  registrar: function (req, res) {

    let errors = {};

    if (req.body.username == "") {
      errors.message = "El campo username esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.body.email == "") {
      errors.message = "El campo email esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.body.password == "") {
      errors.message = "El campo contraseña esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.body.password.length < 3) {
      errors.message = "El campo password debe tener por lo menos 3 caracteres";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.file == undefined) {
      errors.message = "El campo foto esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.body.fecha == "") {
      errors.message = "El campo fecha esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.body.dni == "") {
      errors.message = "El campo dni esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.body.dni.length != 8) {
      errors.message = "El campo dni debe tener 8 digitos";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else {

      data.Usuario.findOne({
        where: {
          [op.or]: [{ email: req.body.email }, { username: req.body.username }]
        }
      })
        .then(usuario => {

          if (usuario != null) {
            errors.message = "El username o email ya existe";
            res.locals.errors = errors;
            return res.render('registracion');
          }
          else {
            data.Usuario.create({
              email: req.body.email,
              username: req.body.username,
              foto: req.file.filename,
              password: bycript.hashSync(req.body.password, 12),
              fechaDeNacimiento: req.body.fecha,
              DNI: req.body.dni
            })
              .then(() => res.redirect('/users/login'))
              .catch(error => console.log(error))
          }

        })
    }
  },

  editarPerfil: function (req, res) {
    res.render('editarPerfil', { info: data.usuarios, indice: req.params.id });
  },

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie('userId');
    res.locals.user = null
    res.redirect('/users/login');
  },


}
/*req es un objeto literal que esta en el navegador, res es la respuesta, 
PARAMS --> tambien es un objeto literal, el .id es el parametro*/

//exportacion

module.exports = usersController