import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const LandingPage = () => {
  useEffect(() => {
    document.title = 'GIGHUB -  Landing Page';
    return () => {
      document.title = 'GIGHUB - Find | Post Jobs';
    };
  }, []);
  return (
    <section className='fixed h-screen w-screen bg-blue-500 flex flex-col justify-center align-center text-center space-y-4 mb-4'>
      <div className='hero absolute top-0 left-0 w-full h-full opacity-10 bg-no-repeat bg-center'></div>

      <div className='relative z-10 '>
        <h1 className='text-6xl font-bold uppercase mt-[-150px] text-white'>
          Gigs<span className='text-black'>Hub</span>
        </h1>
        <p className='text-2xl capitalize text-gray-200 font-bold my-4'>
          Find or post jobs & projects
        </p>
        <div>
          <Link
            to='/login'
            className='inline-block border-2 bg-green-500 border-white text-white py-2 px-4 rounded-full transition-all w-[300px]  font-medium uppercase mt-2 hover:text-black hover:border-primary-color hover:bg-green-200'
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            to='/register'
            className='inline-block border-2 border-white text-white py-2 px-4 rounded-full w-[300px] bg-green-700 transition-all font-medium  uppercase mt-2 hover:text-black hover:border-primary-color  hover:bg-green-200'
          >
            Register
          </Link>
        </div>
        <div className='mt-4 font-bold flex gap-1 items-center justify-center'>
          <span>
            <hr className='text-white border-2 w-[150px]' />
          </span>
          OR
          <span>
            <hr className='text-white border-2 w-[150px]' />
          </span>
        </div>
        <div>
          <Link
            to='/login'
            className='inline-block border-2 border-green-700 text-black py-2 px-4 rounded-full w-[300px] bg-white transition-all font-medium  uppercase mt-2 hover:text-black hover:border-primary-color  hover:bg-green-200'
          >
            Continue as employer
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LandingPage;
