import React from 'react';
import md5 from 'md5';

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email || 'asdasdagfasop');
  return (
    <img
      className={props.className}
      src={`https://es.gravatar.com/avatar/${hash}?d=identicon`}
      alt={props.alt}
    />
  );
}

export default Gravatar;
