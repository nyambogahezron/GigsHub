import { Link } from 'react-router-dom';

export const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className='relative bottom-0 left-0 w-full flex items-center justify-center font-bold bg-blue-500 text-white h-24 mt-24 opacity-90 xl:justify-center'>
      <p className='ml-2'>Copyright & Copy; {Year}, All Rights reserved</p>

      <Link
        to='/create'
        className='absolute transition-all top-1/3 right-10 bg-black text-white py-2 px-5 hover:bg-primary-color'
      >
        Post Job
      </Link>
    </footer>
  );
};
export default Footer;
