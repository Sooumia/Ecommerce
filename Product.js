// src/components/Product.js
import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
}

export default Product;
