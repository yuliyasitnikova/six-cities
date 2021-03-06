import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAuthStatus} from '../../store/user/selectors';
import {login} from '../../store/api-actions';
import {Redirect} from 'react-router-dom';
import {AppRoute} from '../../const';
import {isAuth} from '../../utils';
import Header from '../header/header';
import Main from '../main/main';

const isHasOnlySpaces = (str) => str.match(/^\s+$/) !== null;

function AuthScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const authorizationStatus = useSelector(getAuthStatus);
  const dispatch = useDispatch();

  if (isAuth(authorizationStatus)) {
    return (
      <Redirect to={AppRoute.MAIN} />
    );
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!isHasOnlySpaces(password)) {
      dispatch(login({email, password}));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <Main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </Main>
    </div>
  );
}

export default AuthScreen;
