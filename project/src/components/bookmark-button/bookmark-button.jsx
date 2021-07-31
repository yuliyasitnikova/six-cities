import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {useDispatch, useSelector} from 'react-redux';
import {redirectToRoute} from '../../store/actions';
import {setFavorite} from '../../store/api-actions';
import {getAuthStatus} from '../../store/user/selectors';
import {AppRoute} from '../../const';
import {isAuth} from '../../utils';

function BookmarkButton({className, placeId, isActive, children}) {
  const dispatch = useDispatch();
  const authStatus = useSelector(getAuthStatus);

  const handleClick = () => {
    if (!isAuth(authStatus)) {
      return dispatch(redirectToRoute(AppRoute.LOGIN));
    }

    dispatch(setFavorite(placeId, Number(!isActive)));
  };

  return (
    <button className={classNames(className, {[`${className}--active`]: isActive}, 'button')} type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

BookmarkButton.propTypes = {
  className: PropTypes.string.isRequired,
  placeId: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default BookmarkButton;
