import Home from './pages/Home';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout> 
    <Outlet />
    </Layout>
    )

};

export default App;
