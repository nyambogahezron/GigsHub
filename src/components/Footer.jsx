export const Footer = () => {
  return (
    <footer className='relative bottom-0 left-0 w-full flex items-center justify-start font-bold bg-blue-500 text-white h-24 mt-24 opacity-90 xl:justify-center'>
      <p className='ml-2'>Copyright &copy; 2022, All Rights reserved</p>

      <a
        href='create.html'
        className='absolute top-1/3 right-10 bg-black text-white py-2 px-5'
      >
        Post Job
      </a>
    </footer>
  );
};
export default Footer;
