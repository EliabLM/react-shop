import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import PropTypes from 'prop-types';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({ product }) => {
  const { images, title, price } = product;
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className='ProductItem'>
      <img src={images} alt={title} />
      <div className='product-info'>
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure
          style={{ cursor: 'pointer' }}
          onClick={() => handleClick(product)}
        >
          <img src={addToCartIcon} alt='Add to cart' />
        </figure>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  images: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default ProductItem;
