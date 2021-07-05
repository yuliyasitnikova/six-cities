import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

function Logo() {
  const location = useLocation();

  if (location.pathname === AppRoute.MAIN) {
    return (
      <a className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </a>
    );
  }

  return (
    <Link className="header__logo-link" to={AppRoute.MAIN}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
