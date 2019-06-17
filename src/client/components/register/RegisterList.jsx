import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../gravatar/Gravartar';

function RegisterItem(props) {
  return (
    <div className="BadgesListItem">
      <Gravatar
        className="BadgesListItem__avatar"
        email={props.register.correo}
        alt={`${props.register.nombre} ${props.register.apellido}`}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>
              {props.register.nombre} {props.register.apellido}
            </h3>
          </div>
          <div className="col-12">
            <strong>{props.register.telefono}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterList(props) {
  const registers = props.registers;
  return (
    <div className="BadgesList">
      <ul className="list-unstyled">
        {registers.map(register => {
          return (
            <li key={register.id}>
              <Link
                to={`/${register.id}`}
                className="text-reset text-decoration-none"
              >
                <RegisterItem register={register} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RegisterList;
