import NavBar from './NavBar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <section className='mb-0 dark'>
      <ToastContainer />
      <NavBar />
      {children}
      <Footer />
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
