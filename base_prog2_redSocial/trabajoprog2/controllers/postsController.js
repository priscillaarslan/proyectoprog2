const data = require('../data/index')

const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
      },

      detallePost: function(req, res) {
        console.log(data);
        res.render('detallePost',{info:data.posteos});
      },
    
    
    }  
    
    //exportacion
    
    module.exports = postsController;