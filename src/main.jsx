import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './mainlayout/MainLayout.jsx';
import AddMovie from './components/AddMovie.jsx';
import Home from './components/Home.jsx';
import AllMovies from './components/AllMovies.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/addMovie',
        element: <AddMovie></AddMovie>
      },
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:"/allMovies",
        element:<AllMovies></AllMovies>,
        loader: async () =>{
          return await fetch("http://localhost:3000/movies")
        }
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
