import React from 'react';
import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';

function Logo(props) {
  const {pathname} = useLocation();

  return (
    pathname === AppRoute.MAIN
      ? <a className="header__logo-link header__logo-link--active">{props.children}</a>
      : <Link className="header__logo-link" to={AppRoute.MAIN}>{props.children}</Link>
  );
}

Logo.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Logo;
