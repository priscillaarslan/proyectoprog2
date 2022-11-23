// const data = require('../data/index')
const db = require('../database/models');
const data = require('../database/models');



const postsController = {

  agregarPost: function (req, res) {
    if(req.session.user) {
      res.render('agregarPost');
    }

    else{
      res.redirect('/users/login')
    }
  },

      detallePost : function(req, res) {
        let idPosteo = req.params.id

        data.posteo.findOne({
          include: {
            all: true,
            nested: true

          },
          where: {
            id: idPosteo
          }
        })

        .then((posteo) => {
          return res.render('detallePost', { posteo: posteo })
        })
      },

      
      crearPost: function(req, res) {

        let errors = {};
        if (req.file == undefined) {
          errors.message = "El campo foto esta vacio";
          res.locals.errors = errors;
          return res.render('agregarPost');
        }

        else if (req.body.texto == ""){
          errors.message = "El campo exto esta vacio";
          res.locals.errors = errors;
          return res.render('agregarPost');
        }

        else{
          data.Posteo.create({
            foto: req.file.filename,
            texto: req.body.texto,
            usuario_id: req.session.user.id
          })
          .then((posteo) => res.redirect('/posts/detallePost/' + posteo.id))
          .catch((error) => console.log(error))
        }
  
      },

      borrarPost: function(req,res){
        let idPosteo = req.params.id

        db.Posteo.destroy({
          where: [
            {
              id: idPosteo
            },
            {
              usuario_id: req.session.user.id
            }
          ]
        })
        .then(() => res.redirect('/'))
      },

      editarPost:  function (req, res) { 

        if(req.session.user) {
    
          let idPosteo = req.params.id
    
          data.Posteo.findOne({
            include: {
              all: true,
              nested: true
            },
            where: {
              id: idPosteo
            }
          })
          .then((posteo) => {
            return res.render('editarPost', { posteo: posteo })
          })
          
        }
        else{
          res.redirect('/users/login')
        }
       
      },
      modificarPost:  function (req, res) { 
    
        let idPosteo = req.params.id
    
        data.Posteo.update({
            texto: req.body.texto
          },
          {
            where: {
              id: idPosteo
            }
        })
        .then((posteo) => {
          return res.redirect('/posts/detallePost/' + idPosteo)
        })
    
      },
    
      comentario:  function (req, res) { 
    
        let idPosteo = req.params.id
        let errors = {};
    
        if (req.body.comentario == "") {
    
          data.Posteo.findOne({
            include: {
              all: true,
              nested: true
            },
            where: {
              id: idPosteo
            }
          })
          .then((posteo) => {
            errors.message = "El campo comentario esta vacio";
            res.locals.errors = errors;
            return res.render('detallePost', { posteo: posteo })
          })
    
        }
        else {
          
          db.Comentario.create({
            texto: req.body.comentario,
            usuario_id: req.session.user.id,
            posteo_id: idPosteo
          })
          .then(()=> {
            res.redirect('/posts/detallePost/' + idPosteo)
          })
        }
    
      }
    
    }
    
    //exportacion
    
    module.exports = postsController; 

      

        
  
    