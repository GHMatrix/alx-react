import React from 'react';
import { getFooterCopy, getFullYear } from '../Utils/utils';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer className="App-footer">
            <p>
                Copyright {getFullYear()} - {getFooterCopy()}
            </p>
        </footer>
    );
}

export default Footer;
