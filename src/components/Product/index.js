import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
          expedita!
        </p>
        <p className="product__price">30$</p>
        <div className="product__rating">⭐⭐⭐</div>
      </div>

      <img
        src="https://m.media-amazon.com/images/I/61UDx9jF0mL._AC_SL1315_.jpg"
        alt="product-image"
      />

      <button>Add to card</button>
    </div>
  );
}

export default Product;
