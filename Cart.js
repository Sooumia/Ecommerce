import React from 'react';

function Cart({ cartItems, updateQuantity }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Panier</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>Quantité: {item.quantity}</span>
          <span>{item.price * item.quantity} €</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
        </div>
      ))}
      <h3>Total : {totalPrice} €</h3>
    </div>
  );
}

export default Cart;
