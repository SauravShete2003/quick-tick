import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import Add from './views/Add/Add'
import Show from './views/Show/Show'
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : '/add',
    element: <Add/>
  },
  {
    path : '/show',
    element: <Show/>
  },
  {
    path : '*',
    element: <div>404 not found</div>
  }
]);

root.render(
  <div>
    <RouterProvider router={router} />
    <Toaster/>
  </div>
);
