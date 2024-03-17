import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DescriptionCurso from "../views/descriptionCurso";
import BlogDescripction from "../views/blogDescripction";

const router = createBrowserRouter([
  {
    path: "/cursobasicojs",
    element: <DescriptionCurso />
  },
  {
    path: "/blog",
    element: <BlogDescripction />
  },
]);

export default router