//requires
const index = require('../data/index')
const data = require('../database/models');
const op = data.Sequelize.Op;


//metodos
const indexController = {
  home: function (req, res) {

    data.Posteo.findAll({
      include: {
        all: true,
        nested: true
      }
    })
    .then(posteos => {
      res.render('index', { posteos: posteos });
    })

  },
  /*En el controller paso un callback que tiene dos parametros el req y el res. res.render 
  es para renderizar la vista y pasas dos parametros, priemro el nombre de la vista osea index y 
  como segundo parametro paso un objeto literal que se relaciona con el ob literal que esta
   en data que se llama posteos*/
  busqueda: function (req, res) {

    let busqueda = req.query.buscar;

    data.Posteo.findAll({
      include: {
        all: true,
        nested: true
      },
      where: {texto: {[op.like] : "%" + busqueda + "%"}},
      order: [
        ['createdAT', 'DESC']
      ]
    })
    .then(posteos => {
      res.render('resultadoBusqueda', { posteos: posteos });
    })

  },

}

//exportacion

module.exports = indexController