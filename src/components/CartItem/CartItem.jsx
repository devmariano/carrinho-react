import React from 'react';
import propTypes from 'prop-types';

import {BsFillCartDashFill} from 'react-icons/bs';

import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';

function CartItem( {data}) {

  const {thumbnail, title, price} = data;

  return ( 
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="imagem do produto"
        className="cart-item-image" 
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button 
          type="button" 
          className="button__remove-item"
        >
          <BsFillCartDashFill/>
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
