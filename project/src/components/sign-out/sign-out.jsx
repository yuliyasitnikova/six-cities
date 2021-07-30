import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/api-actions';
import {Link} from 'react-router-dom';

function SignOut() {
  const dispatch = useDispatch();

  return (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        to="/"
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(logout());
        }}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignOut;
