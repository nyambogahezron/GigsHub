const NavBar = () => {
  return (
    <nav className='flex justify-between items-center mb-4'>
      <a href='index.html'>
        <img className='logo w-24' src='images/logo.png' alt='' />
      </a>
      <ul className='flex space-x-6 mr-6 text-lg'>
        <li>
          <a href='register.html' className='hover:text-primary-color'>
            <i className='fa-solid fa-user-plus'></i> Register
          </a>
        </li>
        <li>
          <a href='login.html' className='hover:text-primary-color'>
            <i className='fa-solid fa-arrow-right-to-bracket'></i>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
