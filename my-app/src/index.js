import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Registration from "./components/Registration/Registration";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Speakers from "./components/Speakers/Speakers";
import Themes from "./components/Themes/Themes";
import Committee from "./components/Committee/Committee"
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/registration' element={<Registration/>} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/themes" element={<Themes/>}/>
      <Route path="/committee" element={<Committee/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
