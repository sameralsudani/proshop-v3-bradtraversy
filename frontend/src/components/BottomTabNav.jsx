import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './bottomTabNav.css';

export default function BottomTabNav2() {
  return (
    <nav className='nav'>
      <ul>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/cart'>Cart</CustomLink>
        <CustomLink to='/books/shopAllproducts'>Books</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
