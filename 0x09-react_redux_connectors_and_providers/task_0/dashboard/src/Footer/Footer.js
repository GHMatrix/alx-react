import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../Utils/utils';
import '../Footer/Footer.css';
import { AppContext } from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
