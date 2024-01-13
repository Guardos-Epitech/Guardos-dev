import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import logo from "@src/assets/logo.png";
import { NavigateTo } from "@src/utils/NavigateTo";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function logoutUser() {
    localStorage.removeItem('user');
    setLoggedIn(false);
    NavigateTo('/', navigate, {})
  }

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (userData !== null) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      localStorage.removeItem('user');
    }
  }, []);

  return (
    <div className={styles.BackgroundRect}>
      <span className={styles.NavTitle}>
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
      <span
        className={styles.NavTitle}
        onClick={() => NavigateTo("/", navigate)}
      >
        My Restaurants
      </span>
      <img className={styles.LogoImg} src={logo} alt="Logo" />
      <span
        className={styles.NavTitle}
        onClick={() => NavigateTo("/dishes", navigate)}
      >
        My Dishes
      </span>
      <span
        className={styles.NavTitle}
        onClick={() => NavigateTo("/products", navigate)}
      >
        My Products
      </span>
    </div>
  );
};

export default Header;
