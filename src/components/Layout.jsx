import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <section className='mb-0'>
      <NavBar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
