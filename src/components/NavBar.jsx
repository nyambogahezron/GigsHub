import {
  FaArrowRightToBracket,
  FaArrowRightFromBracket,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav className='flex justify-between items-center mb-4 p-4 border-b'>
      <Logo />
      <ul className='flex space-x-6 mr-6 text-lg'>
        <li>
          <Link
            to='/register'
            className='flex align-baseline items-baseline space-x-1 hover:text-primary-color'
          >
            <span>
              <FaArrowRightFromBracket />{' '}
            </span>
            <span>Register </span>
          </Link>
        </li>
        <li>
          <Link
            to='/login'
            className='flex align-baseline items-baseline space-x-1 hover:text-primary-color'
          >
            <span>
              <FaArrowRightToBracket />
            </span>
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
