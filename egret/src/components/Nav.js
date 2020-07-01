import React from 'react';
import { getToken, getCards } from './Api'

 

function Nav() {
  return (
    <nav>
  <div className='Nav'>
      <h2><b>Egret</b></h2>
      <h3><i>your favorite e-cards site!</i></h3>
    </div>
      <h3>Egret logo</h3>
      <ul className='nav-links'>
        <li>E-Cards</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Nav;
