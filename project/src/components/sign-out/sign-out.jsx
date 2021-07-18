import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout as closeSession} from '../../store/api-actions';

function SignOut({logout}) {
  return (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        to="/"
        onClick={(evt) => {
          evt.preventDefault();
          logout();
        }}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

SignOut.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(closeSession());
  },
});

export {SignOut};
export default connect(null, mapDispatchToProps)(SignOut);
