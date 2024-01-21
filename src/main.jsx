import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleJob from "./pages/SingleJob";
import ManageJobs from "./pages/Manage";
import EditJob from "./pages/EditJob";
import CreateJob from "./pages/CreateJob";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/register" element={<Register />} />
      <Route  path="/job-detail" element={<SingleJob />} />
      <Route  path="/manage" element={<ManageJobs />} />
      <Route  path="/edit-job" element={<EditJob/>} />
      <Route  path="/create" element={<CreateJob/>} />
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
