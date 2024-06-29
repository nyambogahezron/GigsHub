import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import  {
  Home,
  Login,
  Register,
  SingleJob,
  ManageJobs,
  EditJob,
  CreateJob,
  CreateCompanyProfile,
  EditCompanyProfile,
  Profile,
  LandingPage,
} from './pages';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LandingPage />} />
      <Route path='/' element={<App />}>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/job-detail/:id' element={<SingleJob />} />
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
