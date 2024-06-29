import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import { useState } from 'react';

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { companyInfo } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = userInfo?.userId;
  const baseUrl = 'http://localhost:5000';
  const fullImageUrl = `${baseUrl}/${userInfo?.userImg}`;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall({ userId }).unwrap();
      dispatch(logout());
      navigate('/login');
      toast.info('Logged Out Successful');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={Logo} className='h-8' alt='Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            GIGSHUB
          </span>
        </a>
        <div className='relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button
            type='button'
            className='flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              className='relative w-8 h-8 rounded-full'
              src={
                userInfo
                  ? fullImageUrl
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eCqzJ3AbzMWk_Fs4HmdmurRnrGuF6CKWHA&s'
              }
              alt='user photo'
            />
            {/* <!-- Dropdown menu --> */}
            <div
              className={`absolute flex flex-col justify-start top-6 right-14 md:right-0 w-48 transition-all z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
                showDropdown ? '' : 'hidden'
              }`}
            >
              {userInfo ? (
                <>
                  <Link to='/profile'>
                    <div className='flex flex-col items-start px-6 py-3 gap-2 transition-all hover:bg-gray-600'>
                      <span className='block text-sm text-gray-900 dark:text-white'>
                        Bonnie Green
                      </span>
                      <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                        name@flowbite.com
                      </span>
                    </div>
                  </Link>
                </>
              ) : (
                <Link to='/login'>
                  <div className='flex flex-col items-start px-6 py-3 gap-2 transition-all hover:bg-gray-600'>
                    <span className='block text-sm text-gray-900 dark:text-white'>
                      Register
                    </span>
                  </div>
                </Link>
              )}

              <ul className='flex flex-col items-start px-2 mb-2'>
                {userInfo ? (
                  <>
                    <li className='w-full items-start'>
                      <a
                        href='#'
                        className='flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className='w-full items-start'>
                      <a
                        href='#'
                        className='flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                      >
                        Profile
                      </a>
                    </li>

                    <li className='w-full items-start'>
                      <a
                        href='#'
                        className='flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                        onClick={logoutHandler}
                      >
                        Sign out
                      </a>
                    </li>
                  </>
                ) : (
                  <li className='w-full items-start'>
                    <Link
                      to='/login'
                      className='flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </button>

          <button
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            showMobileMenu ? '' : 'hidden'
          }`}
          id='navbar-user'
        >
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Services
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
