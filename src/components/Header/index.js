import React from 'react';
import './Header.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  //Trích xuất tên người dùng từ email
  const userName = user ? user.email.split('@')[0] : 'Guest';

  const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          dispatch({
            type: 'SET_USER',
            user: null,
          });
        })
        .catch((error) => {
          // An error happened.
          console.error('Error signing out', error);
        });
    }
  };

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
        <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
          <div className="nav__item" onClick={user && handleSignOut}>
            <div className={`nav__itemLineOne ${user ? 'nav__itemLineOne--loggedIn' : ''}`}>Hello <span>{userName}</span></div>
            <div className="nav__itemLineTwo">{user ? 'Sign Out' : 'Sign In'}</div>
          </div>
        </Link>

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
