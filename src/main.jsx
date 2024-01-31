import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import store from './store';
import { Provider } from 'react-redux'; 
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleJob from './pages/SingleJob';
import ManageJobs from './pages/Manage';
import EditJob from './pages/EditJob';
import CreateJob from './pages/CreateJob';
import CreateCompanyProfile from './pages/Company.jsx';
import EditCompanyProfile from './pages/EditCompany.jsx';
import Profile from './pages/EditProfile.jsx';
import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LandingPage />} />
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/job-detail/:itemId' element={<SingleJob />} />
        <Route path='/manage' element={<ManageJobs />} />
        <Route path='/edit-job/:itemId' element={<EditJob />} />
        <Route path='/create' element={<CreateJob />} />
        <Route path='/company' element={<CreateCompanyProfile />} />
        <Route path='/edit-company' element={<EditCompanyProfile />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);
