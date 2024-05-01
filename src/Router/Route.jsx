import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../Root/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children: [
        {
          path: "/",
          element: <h1>Home</h1>,
        }
      ],
    }
  ]);

  export default router;