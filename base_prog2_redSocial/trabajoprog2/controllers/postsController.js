const data = require('../data/index')

const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
      },

      detallePost : function(req, res) {
        let idPosteo = req.params.id

        let detallePosteo = data.posteos.find(posteo => posteo.id == idPosteo)
        

        return res.render('detallePost', {info: detallePosteo})
        

      } ,
    
    
    }  
  
    //exportacion
    
    module.exports = postsController;