// const data = require('../data/index')
const data = require('../database/models');
const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
      },

      detallePost : function(req, res) {
        let idPosteo = req.params.id
        let detallePosteo = data.posteos.find(posteo => posteo.id == idPosteo)
        return res.render('detallePost', {info: detallePosteo})
        // res.send(detallePosteo)
      } ,
      
      crearPost: function(req, res) {

        data.Posteo.create({
          foto: req.file.filaname,
          texto: req.body.post,
          usuario_id: req.session.user.id
        })

      }

    }  
  
    //exportacion
    
    module.exports = postsController;