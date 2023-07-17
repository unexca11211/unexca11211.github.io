import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import supabase from "./utils/supabase_init";
import "./index.css";
import Root from "./routes/root";
import Index from "./routes/Index";
import ErrorPage from "./error-page";
import Post from "./routes/post";
import AllPosts from "./routes/allpost";
import Homeworks from "./routes/homeworks";
import HomeworksOf from "./routes/homeworks_of";
import { getAllHomeWorkOf } from "./utils/utils_supabase";

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
        path: "/posts/:postName",
        element: <Post />,
        loader: async ({ params }) => {
          return await supabase
            .from("posts")
            .select("*, users ( id, first_name, last_name )")
            .eq("id", params.postName)
            .single();
        },
      },
      {
        path: "/homeworks",
        element: <Homeworks />,
      },
      {
        path: "/homeworks/:studentName",
        element: <HomeworksOf />,
        loader: async ({ params }) => {
          return await getAllHomeWorkOf(params.studentName);
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
// mi pana, a las mentes brillantes. Muy poca gente la entiende
// mi pana entrando a locura
// const images = getImages();

// const asd = images.map((image) => {
//   return Array.isArray(image.publicURL)
//     ? image.publicURL.map((url) => ({ url: url }))
//     : [];
// });

// console.log(getImages());
// console.log(asd);
