import React from 'react';

function NotFound(props) {
  return (
    <div>
      <h1>No hemos encontrado tu cotnenido</h1>
      <Link className="btn btn-block btn-success" to="/">
        Volver a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
