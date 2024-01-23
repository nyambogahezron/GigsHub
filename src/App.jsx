import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <ToastContainer />
      <Outlet />
    </Layout>
  );
};

export default App;
