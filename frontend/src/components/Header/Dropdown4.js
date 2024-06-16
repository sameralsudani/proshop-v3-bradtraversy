import React, { useState } from 'react';
import { MenuItems4 } from './MenuItems4';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown4(props) {
  const { logoutHandler } = props;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu2 clicked' : 'dropdown-menu2'}
      >
        {MenuItems4.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={
                  item.title === 'Logout'
                    ? () => {
                        setClick(false);
                        logoutHandler();
                      }
                    : () => {
                        setClick(false);
                      }
                }
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown4;
