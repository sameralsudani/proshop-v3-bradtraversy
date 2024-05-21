import React from 'react';
import { Button } from 'react-bootstrap';

export default function Product(props) {
  return (
    <div className='card2 mb-4'>
      <img className='product-image' src={props.url} alt='product' />
      <h2>{props.name}</h2>

      <Button variant='primary'>Add to Cart</Button>
    </div>
  );
}
