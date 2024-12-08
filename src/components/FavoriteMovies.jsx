import { useLoaderData } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const FavoriteMovies = () => {
    const allFavoriteMovies = useLoaderData(); // Load all favorite movies
    const { user } = useContext(AuthContext);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (user) {
            // Filter by logged-in user's email
            const filteredMoviesByEmail = allFavoriteMovies.filter(
                (movie) => movie.userEmail === user.email
            );

            // Remove duplicates based on title
            const uniqueMovies = [];
            const titleSet = new Set();

            filteredMoviesByEmail.forEach((movie) => {
                if (!titleSet.has(movie.title)) {
                    titleSet.add(movie.title);
                    uniqueMovies.push(movie);
                }
            });

            setMovies(uniqueMovies);
        }
    }, [user, allFavoriteMovies]);

    // Handle delete favorite movie
    const handleDeleteFavorite = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/favoriteMovies/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount === 1) {
                            const newMovies = movies.filter(
                                (movie) => movie._id !== id
                            );
                            setMovies(newMovies);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Movie has been removed from favorites.",
                                icon: "success",
                                confirmButtonText: "Close",
                                customClass: {
                                    confirmButton: "bg-[#e50912] text-white",
                                },
                            });
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting movie:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Could not delete the movie. Please try again.",
                            icon: "error",
                            confirmButtonText: "Close",
                            customClass: {
                                confirmButton: "bg-[#e50912] text-white",
                            },
                        });
                    });
            }
        });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-4 my-2 text-[#e50912]">
                Favorite Movies!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 px-4">
                {movies.map((movie) => (
                    <FavoriteCard
                        handleDeleteFavorite={handleDeleteFavorite}
                        key={movie._id}
                        movie={movie}
                    ></FavoriteCard>
                ))}
            </div>
        </div>
    );
};

export default FavoriteMovies;
