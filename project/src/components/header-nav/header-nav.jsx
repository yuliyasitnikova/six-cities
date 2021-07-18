import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isAuth} from '../../utils';
import User from '../user/user';
import SignIn from '../sign-in/sign-in';
import SignOut from '../sign-out/sign-out';

function HeaderNav({authorizationStatus}) {
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

HeaderNav.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {HeaderNav};
export default connect(mapStateToProps, null)(HeaderNav);
