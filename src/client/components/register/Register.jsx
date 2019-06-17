import React from 'react';
import Gravatar from '../gravatar/Gravartar';

function Register(props) {
  return (
    <div className="Badge">
      <div className="badge_header">
        <h2>Información de registro</h2>
      </div>
      <div className="badge_section-name">
        <Gravatar className="Badge__avatar" email={props.correo} alt="avatar" />
        <h1>
          {props.nombre} <br /> {props.apellido}
        </h1>
      </div>
      <div className="badge_section-info">
        <p>{props.telefono}</p>
      </div>
      <div className="badge_footer">#DesarrolloWeb</div>
    </div>
  );
}

export default Register;
