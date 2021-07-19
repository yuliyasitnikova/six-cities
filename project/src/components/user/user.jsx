import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function User({user}) {
  const {email} = user;
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
        <div className="header__avatar-wrapper user__avatar-wrapper" />
        <span className="header__user-name user__name">{email}</span>
      </Link>
    </li>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export {User};
export default connect(mapStateToProps, null)(User);
