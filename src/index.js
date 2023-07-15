import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Index from "./routes/Index";
import ErrorPage from "./error-page";
import Post from "./routes/post";
import AllPosts from "./routes/allpost";
import Homeworks from "./routes/homeworks";
import HomeworksOf from "./routes/homeworks_of";
import { getAllHomeWorkOf, getSupabase } from "./utils/utils_supabase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/posts",
        element: <AllPosts />,
      },
      {
        path: "posts/:postName",
        element: <Post />,
      },
      {
        path: "/homeworks",
        element: <Homeworks />,
        loader: async () => {
          return await getSupabase("students", "*")
        }
      },
      {
        path: "/homeworks/:studentName",
        element: <HomeworksOf />,
        loader: async ({ params }) => {
          return await getAllHomeWorkOf(params.postName);
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
