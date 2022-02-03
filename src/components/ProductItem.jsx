import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import PropTypes from 'prop-types';

import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const { images, title, price } = product;
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className='ProductItem'>
      <img src={images} alt={title} />
      <div className='product-info'>
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure style={{ cursor: 'pointer' }} onClick={handleClick}>
          <img src={addToCart} alt='Add to cart' />
        </figure>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  images: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductItem;
