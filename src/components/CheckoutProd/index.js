import React from 'react';
import './CheckoutProd.css';
import { useStateValue } from '../StateProvider';

function CheckoutProd({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const handleRemoveFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  }

  return (
    <div className="checkoutProd">
      <div>
        <img src={image} alt="Product pic" className="checkoutProd__image" />
      </div>

      <div className="checkoutProd__info">
        <p className="checkoutProd__title">{title}</p>
        <p className="checkoutProd__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProd__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={handleRemoveFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProd;
