import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
function Footer() {
  return (
    <footer>
            <p>Created by 
                <Link className='linkFooter' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank">Franco Ezequiel Marchegiani </Link> 
                - 
                <Link className='linkFooter' to="//devchallenges.io/" target="_blank" rel="noopener noreferrer"> devChallenges.io</Link>
            </p>
    </footer>
  );
}
export default Footer;