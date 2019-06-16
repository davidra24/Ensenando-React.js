require('dotenv/config');
const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const connectionString = `${process.env.DATABASE_URL}?ssl=true`;
const db = pgp(connectionString);

/** USUARIOS */
module.exports.getAllRegisters = (req, res, next) => {
  db.any('select * from registro')
    .then(registros => {
      res.status(200).json(registros);
    })
    .catch(err => next(err));
};

module.exports.getSingleRegister = (req, res, next) => {
  db.one('select * from registro where id = $1', req.params.id)
    .then(function(registro) {
      res.status(200).json(registro);
    })
    .catch(function(err) {
      return next(err);
    });
};

module.exports.createRegister = async (req, res, next) => {
  db.none(
    'insert into registro(nombre, apellido, correo, telefono)' +
      'values($1, $2, $3, $4)',
    [req.body.nombre, req.body.apellido, req.body.correo, req.body.telefono]
  )
    .then(function() {
      res.status(200).json({
        status: 'success',
        message: 'Inserted one register'
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

module.exports.deleteRegister = (req, res, next) => {
  db.result('delete from registro where id = $1', req.params.id)
    .then(function(result) {
      res.status(200).json({
        status: 'success',
        message: `Removed ${result.rowCount} register`
      });
    })
    .catch(function(err) {
      return next(err);
    });
};

module.exports.updateRegister = async (req, res, next) => {
  db.none(
    'update registro set nombre=$1, apellido=$2, correo=$3, telefono=$4 ' +
      ' where id=$5',
    [
      req.body.nombre,
      req.body.apellido,
      req.body.correo,
      req.body.telefono,
      req.params.id
    ]
  )
    .then(function() {
      res.status(200).json({
        status: 'success',
        message: 'Updated register'
      });
    })
    .catch(function(err) {
      return next(err);
    });
};
