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
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import PrivateLoginRegister from "./routes/PrivateLoginRegister.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/addMovie",
                element: (
                    <PrivateRoutes>
                        <AddMovie></AddMovie>
                    </PrivateRoutes>
                ),
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
                element: (
                    <PrivateRoutes>
                        <FavoriteMovies></FavoriteMovies>
                    </PrivateRoutes>
                ),
                loader: async () => {
                    return await fetch("http://localhost:3000/favoriteMovies");
                },
            },
            {
                path: "/trendingNow",
                element: <Trending></Trending>,
            },
            {
                path: "/login",
                element: (
                    <PrivateLoginRegister>
                        <Login></Login>
                    </PrivateLoginRegister>
                ),
            },
            {
                path: "/register",
                element: (
                    <PrivateLoginRegister>
                        <Register></Register>
                    </PrivateLoginRegister>
                ),
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
