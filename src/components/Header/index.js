import React from 'react';
import './Header.css';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header__logo">
          <StorefrontOutlinedIcon className="header__logoImg" fontSize="large" />
          <h2 className="header__logoTitle">AzonClone</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchOutlinedIcon className="header__searchIcon" fontSize="large" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <div className="nav__itemLineOne">Hello Guest</div>
          <div className="nav__itemLineTwo">Sign In</div>
        </div>

        <div className="nav__item">
          <div className="nav__itemLineOne">Your</div>
          <div className="nav__itemLineTwo">Shop</div>
        </div>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="nav__itemCart">
            <ShoppingCartOutlinedIcon fontSize="large" />
            <div className="nav__itemLineTwo nav__cartCount">{cart.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
