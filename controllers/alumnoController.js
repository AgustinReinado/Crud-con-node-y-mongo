const Alumno = require('../model/Alumno')

//mostrar

  module.exports.mostrar = async (req, res) => {
    try {
      const alumnos = await Alumno.find({});
      return res.render('index', { alumnos: alumnos });
    } catch (error) {
      return res.status(500).json({
        message: 'Error mostrando los alumnos',
        error: error.message,
      });
    }
  };

  //crear
  module.exports.crear = async (req, res) => {
    try {
      const alumno = new Alumno({
        nombre: req.body.nombre,
        edad: req.body.edad
      });
  
      await alumno.save();
      return res.redirect('/');
    } catch (error) {
      return res.status(500).json({
        message: 'Error al crear el Alumno',
        error: error.message
      });
    }
  };

  //editar

  module.exports.editar = async (req, res) => {
    try {
      const id = req.body.id_editar;
      const nombre = req.body.nombre_editar;
      const edad = req.body.edad_editar;
  
      await Alumno.findByIdAndUpdate(id, { nombre, edad });
  
      return res.redirect('/');
    } catch (error) {
      return res.status(500).json({
        message: 'Error actualizando el Alumno',
        error: error.message
      });
    }
  };

//borrar

  module.exports.borrar = async (req, res) => {
    try {
      const id = req.params.id;
      
      await Alumno.findByIdAndDelete(id);
  
      return res.redirect('/');
    } catch (error) {
      return res.status(500).json({
        message: 'Error eliminando el Alumno',
        error: error.message
      });
    }
  };