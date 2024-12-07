import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./mainlayout/MainLayout.jsx";
import AddMovie from "./components/AddMovie.jsx";
import Home from "./components/Home.jsx";
import AllMovies from "./components/AllMovies.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import FavoriteMovies from "./components/FavoriteMovies.jsx";
import Trending from "./components/Trending.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/addMovie",
                element: <AddMovie></AddMovie>,
            },
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    return await fetch("http://localhost:3000/movies");
                },
            },
            {
                path: "/allMovies",
                element: <AllMovies></AllMovies>,
                loader: async () => {
                    return await fetch("http://localhost:3000/movies");
                },
            },
            {
                path: "/movies/:id",
                element: <MovieDetails></MovieDetails>,
                loader: async ({ params }) => {
                    return await fetch(
                        `http://localhost:3000/movies/${params.id}`
                    );
                },
            },
            {
                path: "/favoriteMovies",
                element: <FavoriteMovies></FavoriteMovies>,
                loader: async () => {
                    return await fetch("http://localhost:3000/favoriteMovies");
                },
            },
            {
                path: "/trendingNow",
                element: <Trending></Trending>,
                loader: async () => {
                    return await fetch("http://localhost:3000/movies");
                },
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
