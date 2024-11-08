// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const products = [
    { id: 1, name: "Produit 1", price: 20, image:  require('./image/pexels-sameerkalani-3802602.jpg'), description: "Description du produit 1", category: "Catégorie A" },
    { id: 2, name: "Produit 2", price: 30, image: require("./image/pexels-kpaukshtite-3270223.jpg"), description: "Description du produit 2", category: "Catégorie B" },
    { id: 3, name: "Produit 3", price: 15, image: require("./image/pexels-madebymath-90946.jpg"), description: "Description du produit 3", category: "Catégorie A" },
    { id: 4, name: "Produit 4", price: 50, image:  require('./image/pexels-laryssa-suaid-798122-1667088.jpg'), description: "Description du produit 4", category: "Catégorie B" },
    { id: 5, name: "Produit 5", price: 60, image: require("./image/pexels-suzyhazelwood-2536965.jpg"), description: "Description du produit 5", category: "Catégorie B" },
    { id: 6, name: "Produit 6", price: 10, image: require("./image/pexels-pixabay-4158.jpg"), description: "Description du produit 6", category: "Catégorie A" },
    
  ];

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const filteredProducts = selectedCategory === "Tous"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h2>Bienvenue sur notre boutique !</h2>} />
        <Route 
          path="/products" 
          element={
            <ProductList 
              products={filteredProducts} 
              addToCart={addToCart} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          } 
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} updateQuantity={updateQuantity} />} />
      </Routes>
    </Router>
  );
}

export default App;
