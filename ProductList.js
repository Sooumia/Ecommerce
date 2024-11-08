import React from 'react';

function ProductList({ products, addToCart, selectedCategory, setSelectedCategory }) {
  return (
    <div className="product-list-container">
      <div className="category-selector">
        <label htmlFor="category">Filtrer par catégorie :</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Tous">Tous</option>
          <option value="Catégorie A">Informatique</option>
          <option value="Catégorie B">Cosmetique</option>
        </select>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}€</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
