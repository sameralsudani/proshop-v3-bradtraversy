import React from 'react';
import { Link } from 'react-router-dom';

export default function Grade(props) {
  return (
    <Link to=''>
      <div className='card2 mb-4'>
        <img className='product-image' src={props.url} alt='product' />
        <h2 className='bg-primary p-2' style={{ color: 'white' }}>
          {props.name}
        </h2>
      </div>
    </Link>
  );
}
