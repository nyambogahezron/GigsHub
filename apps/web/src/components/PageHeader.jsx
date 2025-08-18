const Header = ({ headerTitle, Description }) => {
  return (
    <header className='text-center'>
      <h2 className='text-2xl font-bold uppercase mb-1'>{headerTitle}</h2>
      <p className='mb-4'>{Description}</p>
    </header>
  );
};

export default Header;
