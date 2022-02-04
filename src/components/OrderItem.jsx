import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import icon from '@icons/icon_close.png';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

const OrderItem = ({ product, index }) => {
  const { removeFromCart } = useContext(AppContext);
  const { title, price, images } = product;

  return (
    <div className='OrderItem'>
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img
        onClick={() => removeFromCart(index)}
        style={{ cursor: 'pointer' }}
        src={icon}
        alt='close'
      />
    </div>
  );
};

export default OrderItem;

OrderItem.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
};
