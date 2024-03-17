import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DescriptionCurso from './views/descriptionCurso';
import BlogDescripction from './views/blogDescripction';
import Home from './Home';
import Layout from './components/Layout';
import "./globals.css"
import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

// Configura tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBYcy0M50zp_dNvXMu-fl4WjS6Jnd5eyGE",
  authDomain: "comentariosblog-87704.firebaseapp.com",
  projectId: "comentariosblog-87704",
  storageBucket: "comentariosblog-87704.appspot.com",
  messagingSenderId: "275874227001",
  appId: "1:275874227001:web:702aaff10c75755000bee8",
  measurementId: "G-YDYYBL5SSY"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home/></Layout>,
  },
  {
    path: "/cursobasicojs/:title/:price",
    element: <Layout><DescriptionCurso/></Layout>,
  },
  {
    path: "/blog/:title",
    element: <Layout><BlogDescripction/></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);