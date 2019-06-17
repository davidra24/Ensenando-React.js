import React from 'react';

function RegisterForm(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          <input
            className="form-control"
            type="text"
            name="nombre"
            onChange={props.onChange}
            /** Valor controlado*/
            value={props.formValues.nombre}
          />
          <label htmlFor="">Apellido</label>
          <input
            className="form-control"
            type="text"
            name="apellido"
            onChange={props.onChange}
            value={props.formValues.apellido}
          />
          <label htmlFor="">Correo electrónico</label>
          <input
            className="form-control"
            type="email"
            name="correo"
            onChange={props.onChange}
            value={props.formValues.correo}
          />
          <label htmlFor="">Teléfono</label>
          <input
            className="form-control"
            type="text"
            name="telefono"
            onChange={props.onChange}
            value={props.formValues.telefono}
          />
          <br />
          <button className="btn btn-primary">Guardar</button>
          {props.error && <p className="text-danger">Internal server error</p>}
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
