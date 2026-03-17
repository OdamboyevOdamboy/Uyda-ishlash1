import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Details from "../Details";
export const route=createBrowserRouter([
  {
    path:'/',
    element:<Navigate to="/group"/>,
  },
  {
    path:'/group',
    element:<App/>,
  },
  {
    path:'/group/:name',
    element:<Details/>,
  }
])