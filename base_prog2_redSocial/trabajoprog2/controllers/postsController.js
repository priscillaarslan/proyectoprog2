const data = require("../data");

const postsController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
      },

      detallePost: function(req, res) {
        res.render('detallePost',{info:data.detallePost});
      },
    
    
    }  
    
    //exportacion
    
    module.exports = postsController