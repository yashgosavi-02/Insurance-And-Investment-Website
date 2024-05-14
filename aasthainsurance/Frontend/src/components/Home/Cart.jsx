// Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
const Cart = ({ selectedPolicy }) => {
  return (
    <div>
      <h2>Cart</h2>
        <p>Selected Policy: {selectedPolicy}</p>
      <Link to="/life">Back to Policies</Link>
    </div>
  );
};

export default Cart;
