 //requires : es para mandarle la data del modelo al controlador, ahora hay que mandar del controlador a la vista.
//para pasarselo a la vista, al render le pasamos parametros
const data = require('../database/models');
const User = data.Usuario;
const bycript = require('bcryptjs');
const db = require('../database/models');
const op = data.Sequelize.Op;

//metodos
const usersController = {
  detalleUsuario: function (req, res) {
    let id = req.params.id
    let user_id = null;

    if(req.session.user) {
      user_id = req.session.user.id;
    }

    data.Usuario.findOne({
      include: {
        all: true,
        nested:true
      },
      where: {
        id: id
      }
    })
    .then(usuario => {

      let siguiendo = false;

      console.log({user_id});

      for(let i = 0; i < usuario.mis_usuarios_seguidores.length; i++) {
        if(user_id == usuario.mis_usuarios_seguidores[i].id) {
          siguiendo = true;
        }
      }

      res.render('detalleUsuario', { usuario: usuario, siguiendo: siguiendo });
    })
    
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
    else if (req.body.dni == "") {
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
    let id = req.session.user.id
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
      res.render('miPerfil', { usuario: usuario });
    })
    
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


  modificarPerfil: function (req, res) {

    let errors = {};

    if (req.file == undefined) {
      errors.message = "El campo foto esta vacio";
      res.locals.errors = errors;
      return res.render('editarPerfil');
    }
    else if (req.body.fecha == "") {
      errors.message = "El campo fecha esta vacio";
      res.locals.errors = errors;
      return res.render('editarPerfil');
    }
    else if (req.body.dni == "") {
      errors.message = "El campo DNI esta vacio";
      res.locals.errors = errors;
      return res.render('editarPerfil');
    }
    else if (req.body.dni.length != 8) {
      errors.message = "El campo dni debe tener 8 digitos";
      res.locals.errors = errors;
      return res.render('editarPerfil');
    }
    else {
      data.Usuario.update({
        foto: req.file.filename,
        fechaDeNacimiento: req.body.fecha,
        DNI: req.body.dni
      },{
        where: {
          id: req.session.user.id
        }
      })
      .then((usuario) => {
     
        data.Usuario.findOne({
          where: {
            id: req.session.user.id
          }
        })
        .then(usuario => {
          req.session.user = usuario
          res.redirect('/users/miPerfil')
        })
        .catch(error => console.log(error))

      })
      .catch(error => console.log(error))
    }
   
  },

  seguir: function (req, res) {
    let id_seguido = req.params.id

    db.Seguidor.create({
      seguido_id: id_seguido,
      seguidor_id: req.session.user.id
    })
    .then(usuario => {
      res.redirect('/users/detalleUsuario/' + id_seguido)
    })
    .catch(error => console.log(error))

  },

  noSeguir: function (req, res) {
    let id_seguido = req.params.id

    db.Seguidor.destroy({
      where: [
        {
          seguido_id: id_seguido
        },
        {
          seguidor_id: req.session.user.id
        }
      ]
    })
    .then(usuario => {
      res.redirect('/users/detalleUsuario/' + id_seguido)
    })
    .catch(error => console.log(error))
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