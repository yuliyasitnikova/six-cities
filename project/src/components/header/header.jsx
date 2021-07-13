import React from 'react';
import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Logo>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
