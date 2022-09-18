//requires
const index = require ('../data/index')

//metodos
const indexController = {
home: function(req, res) {
 res.render('index',{posteos:index.posteos});
  },
  /*En el controller paso un callback que tiene dos parametros el req y el res. res.render 
  es para renderizar la vista y pasas dos parametros, priemro el nombre de la vista osea index y 
  como segundo parametro paso un objeto literal que se relaciona con el ob literal que esta
   en data que se llama posteos*/
busqueda: function(req, res) {
    res.render('resultadoBusqueda');
  },

}  

//exportacion

module.exports = indexController
