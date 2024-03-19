import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { useStateValue } from '../../components/StateProvider';
import { auth } from '../../Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{ user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // Update the global state with the user's email
        dispatch({
          type: 'SET_USER',
          user: auth.user,
        });
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          // Update the global state with the user's email
          dispatch({
            type: 'SET_USER',
            user: auth.user,
          });
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">AzonLite</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Login</h1>

        <form>
          <h4>E-mail</h4>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h4>Password</h4>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="login__signInButton" onClick={signIn}>
            Submit
          </button>
        </form>

        <p>
          By signing-in you agree to the AZONLITE Conditions of Use & Sale. Please see our Privacy
          Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className="login__registerBtn" onClick={register}>
          Create your new account
        </button>
      </div>
    </div>
  );
}

export default Login;
