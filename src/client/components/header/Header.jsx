import React, { Fragment } from 'react';
import logo from '../../images/logo.png';

function Header(props) {
  return (
    <Fragment>
      <div className="BadgeNew__hero">
        <img className="BadgeNew_hero-image img-fluid" src={logo} alt="Logo" />
      </div>
    </Fragment>
  );
}

export default Header;
