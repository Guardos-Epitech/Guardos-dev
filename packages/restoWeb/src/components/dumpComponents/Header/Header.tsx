import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import logo from "@src/assets/logo.png";
import { NavigateTo } from "@src/utils/NavigateTo";
import { checkIfTokenIsValid } from '../../../services/userCalls';
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function logoutUser() {
    localStorage.removeItem('user');
    setLoggedIn(false);
    NavigateTo('/', navigate)
  }

  const checkUserToken = async () => {
    try {
      const userToken = localStorage.getItem('user');

      if (userToken === null) {
        setLoggedIn(false);
        return;
      }
      const isUserTokenValid = await checkIfTokenIsValid({ key: userToken });

      if (isUserTokenValid === 'OK') {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error fetching login data:', error);
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [navigate]);

  return (
    <div className={loggedIn ? styles.BackgroundRectLoggedIn : styles.BackgroundRectLoggedOut}>
      <span className={loggedIn ? styles.NavTitle : styles.NavTitleLogIn }>
        { loggedIn ? (
          <a onClick={logoutUser}>
            Logout
          </a>
        ) : (
          <a onClick={() => NavigateTo('/login', navigate, {})}>
            Login
          </a>
        )}
      </span>
      { loggedIn 
        &&
        <span
        className={styles.NavTitle}
        onClick={() => NavigateTo("/", navigate)}
        >
          My Restaurants
        </span>
      }
      <img className={styles.LogoImg} src={logo} alt="Logo" />
      { !loggedIn 
        &&
        <div
        className={styles.NavTitle}
        >
        </div>
      }
      { loggedIn 
        &&
        <span
        className={styles.NavTitle}
        onClick={() => NavigateTo("/dishes", navigate)}
        >
          My Dishes
        </span>
      }
      { loggedIn 
        &&
        <span
        className={styles.NavTitle}
        onClick={() => NavigateTo("/products", navigate)}
        >
          My Products
        </span>
      }
    </div>
  );
};

export default Header;
