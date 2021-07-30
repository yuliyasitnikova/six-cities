import React from 'react';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/data/selectors';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function User() {
  const {email} = useSelector(getUser);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
        <div className="header__avatar-wrapper user__avatar-wrapper" />
        <span className="header__user-name user__name">{email}</span>
      </Link>
    </li>
  );
}

export default User;
