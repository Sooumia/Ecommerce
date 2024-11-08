import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>E-commerce</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/products">Produits</Link>
        <Link to="/cart">Panier</Link>
      </nav>
    </header>
  );
}

export default Header;
