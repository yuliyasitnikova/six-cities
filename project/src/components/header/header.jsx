import React from 'react';
import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
