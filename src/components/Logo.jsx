import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <>
      {' '}
      <Link to='/'>
        <div className='logo transition-all w-24 hover:scale-[1.1]'>
          <span className='bg-primary-color  font-bold text-lg text-white p-2'>
            GIGS
          </span>
          <span className='bg-blue-500 outline-none border-none font-bold text-lg text-primary-color p-2'>
            HUB
          </span>
        </div>
      </Link>
    </>
  );
};
export default Logo;
