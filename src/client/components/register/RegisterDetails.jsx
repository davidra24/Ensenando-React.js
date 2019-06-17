import React, { Fragment } from 'react';
import Register from './Register';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function RegisterDetails(props) {
  return (
    <Fragment>
      <div className="BadgeDetails__hero">
        <div className="container" />
        <div className="row">
          <div className="col-6">
            <img src={logo} className="Badges__logo" alt="logo de la u" />
          </div>
          <div className="col-6 BadgeDetails__hero-attendant-name">
            <h2>
              {props.register.nombre} {props.register.apellido}
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Register
              nombre={props.register.nombre}
              apellido={props.register.apellido}
              correo={props.register.correo}
              telefono={props.register.telefono}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/${props.register.id}/edit`}
              >
                Edit
              </Link>
              <br />
              <button
                onClick={props.handleDelete}
                className="btn btn-danger mb-4"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterDetails;
