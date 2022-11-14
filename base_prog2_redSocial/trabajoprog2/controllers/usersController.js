//requires : es para mandarle la data del modelo al controlador, ahora hay que mandar del controlador a la vista.
//para pasarselo a la vista, al render le pasamos parametros
const data = require('../database/models');
const User = data.User;
const bycript = require('bcryptjs');
const op = data.Sequelize.Op;

//metodos
const usersController = {
    detalleUsuario: function(req, res) {
      let id= req.params.id
      let usuario = data.usuarios.find(usuario=>usuario.id==id)
      let posteos = data.posteos.filter(posteo=>posteo.idUsuario==id)
      console.log(posteos);
        res.render('detalleUsuario',{usuario:usuario,posteos:posteos});
      },
      Login: function(req, res) {
        res.render('Login');
      },

      loginPost: (req,res) => {
        let info = req.body;
        let filtro ={
          where: [{email: info.email}]
        }
        User.findOne(filtro)
        .then((result)=> {
          if(result!=null){
            let passEncriptada= bycript.compareSync(info.password, result.password);
            if(passEncriptada){
              req.session.user = result.dataValues;

              if (info.rememberme != undefined){
                res.cookie('userId', result.dataValues.id, {maxAge: 1000* 60*10})
              }

              return redirect('/movies');
            }else{
              return res.send('La clave no coincide');
            }
          }
        })
        .catch(error=>console.log(error))
      },

    miPerfil: function(req, res) { 
      
      return res.send("ok")
/*         res.render('miPerfil',{info:data.usuarios[0],posts:data.posteos.filter(posteo=>posteo.idUsuario==data.usuarios[0].id)});
 */      },
      registracion: function(req, res) {
        res.render('registracion');
      },
      editarPerfil: function(req, res) {
        res.render('editarPerfil', {info:data.usuarios,indice:req.params.id});
      },

      logout: function(req, res) {
        req.session.destroy();
        res.clearCookie('userId');
        res.locals.user = null
        return res.render('login');
        
      },


    }  
    /*req es un objeto literal que esta en el navegador, res es la respuesta, 
    PARAMS --> tambien es un objeto literal, el .id es el parametro*/
    
    //exportacion
    
    module.exports = usersController