//requires
const index = require ('../data/index')

//metodos
const indexController = {
home: function(req, res) {
 res.render('index',{posteos:index.posteos});
  },
busqueda: function(req, res) {
    res.render('resultadoBusqueda');
  },

}  

//exportacion

module.exports = indexController