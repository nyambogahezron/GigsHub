import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const LandingPageNavbar = () => {
  return (
    <nav className='bg-gray-900 border-b  z-50'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-between '>
            <NavLink className='flex flex-shrink-0 items-center ml-2' to='/'>
              <Logo />
            </NavLink>
            <div className='mr-4'>
              <div className='flex space-x-2'>
                <NavLink
                  to='/login'
                  className='text-white hover:bg-gray-900 hover:text-white border rounded-md px-6 py-2'
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default LandingPageNavbar;
