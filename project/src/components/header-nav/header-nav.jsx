import React from 'react';
import {useSelector} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';
import {isAuth} from '../../utils';
import User from '../user/user';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';

function HeaderNav() {
  const authorizationStatus = useSelector(getAuthStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {
          isAuth(authorizationStatus)
            ?
            <>
              <User />
              <SignOut />
            </>
            : <SignIn />
        }
      </ul>
    </nav>
  );
}

export default HeaderNav;
