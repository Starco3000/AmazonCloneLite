import React from 'react';
import './Checkout.css';
import CheckoutProd from '../../components/CheckoutProd';
import Subtotal from '../../components/Subtotal';
import { useStateValue } from '../../components/StateProvider';

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad Banner"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {cart.map((item) => (
            <CheckoutProd
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
