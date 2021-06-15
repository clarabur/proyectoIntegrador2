const db = require('../database/models')

const op = db.sequelize.Op;


let indexController = {

  index: (req, res) => {

    db.Producto.findAll({
      include: [
        {association: 'usuario'}
      ]
    })

      .then(resultado => { res.render('index', { resultados: resultado })
      })

  },

  show: (req, res) => {
    let primaryKey = req.params.id;
    db.Producto.findByPk(primaryKey, {
        include: [{ association: 'comentario', include: [{ association: 'usuario'}] }, { association: 'usuario' }]
      })

      .then(resultados =>  res.render('product', {resultados }))
      .catch((err) => `Error: ${err}`)


  },
  search: (req, res) => {
    let buscadorProductos = req.query.search
    db.Producto.findAll({
        where: [{
          nombre: {
            [op.like]: `%${buscadorProductos}%`
          }
        }]
      })
      .then(resultados => res.render('search-results', {
        resultados: resultados
      }))
      .catch((err) => console.log(err))
  },

  // ordenar productos de manera descendentes

  store: (req, res) => {
    db.Producto.findAll({
      order: [
        ['lanzamiento', 'DESC']
      ],


    })
  },

}

module.exports = indexController;