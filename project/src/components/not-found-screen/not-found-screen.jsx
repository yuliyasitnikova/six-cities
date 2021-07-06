import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../header/header';
import Footer from '../footer/footer';

function NotFoundScreen() {
  return (
    <div className="page page--error">
      <Header />
      <main className="page__main page__main--error">
        <div className="page__error-container container">
          <section className="error error--404">
            <div className="error__text">
              <h1 className="error__title">404. Page Not Found</h1>
              <Link className="error__link" to={AppRoute.MAIN}>Back to home</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundScreen;
