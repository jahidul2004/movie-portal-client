import { useLoaderData } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";
import { useState } from "react";
import Swal from "sweetalert2";

const FavoriteMovies = () => {
    const favoritesMovies = useLoaderData();

    const [movies, setMovies] = useState(favoritesMovies);

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
                fetch(`https://movie-portal-server-indol.vercel.app/favoriteMovies/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            const newMovies = movies.filter(
                                (movie) => movie._id !== id
                            );
                            setMovies(newMovies);

                            Swal.fire({
                                title: "Success!!",
                                text: "Movie deleted from favorites successfully",
                                icon: "success",
                                confirmButtonText: "Close",
                                customClass: {
                                    confirmButton: "bg-[#e50912] text-white",
                                },
                            });
                        }
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
