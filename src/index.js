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
        path: "posts/:postName",
        element: <Post />,
        loader: async ({params}) => {
          return await supabase.from("post").select("*").eq("title", params.postName)
        }
      },

      {
        path: "/homeworks",
        element: <Homeworks />,
        loader: async () => {
          const { data: student } = await supabase.from("students").select("Nombres,Apellidos");
          const homeworks = []
          student.map(async p => {
            homeworks.push(await getAllHomeWorkOf(p.Nombres, p.Apellidos));
          })
          const list_homework = {}
          
          for (let index = 0; index < student.length; index++) {
            list_homework.push({})
          }
          
          console.log(student, homeworks)
          console.log(list_homework)
          return list_homework;  
          // {name, tareas: []}
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
