import React from 'react';
import { Link } from 'react-router-dom';

export default function Grade(props) {
  return (
    <Link to=''>
      <div className='grade-card mb-4'>
        <img className='grade-image' src={props.url} alt='grade' />
        <div className='grade-text'>{props.name}</div>
      </div>
    </Link>
  );
}
