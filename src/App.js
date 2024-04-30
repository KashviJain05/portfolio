import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Portfolio from "./Portfolio";
import AddProject from "./sections/AddProject";
import PostProject from "./sections/PostProject";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Portfolio />,
    },
    {
      path: "/addProjects",
      element: <AddProject />,
    },
    {
      path: "/post",
      element: <PostProject />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
