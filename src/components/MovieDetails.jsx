import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MovieDetails = () => {
    const movieDetails = useLoaderData();

    const navigate = useNavigate();

    const formatDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}h ${minutes}m`;
    };

    const { user } = useContext(AuthContext);

    const userEmail = user ? user.email : null;
    movieDetails.userEmail = userEmail;

    const handleAddFavorites = () => {
        fetch("https://movie-portal-server-indol.vercel.app/favoriteMovies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                if (
                    data.acknowledged ||
                    data.message === "Movie added to favorites successfully."
                ) {
                    Swal.fire({
                        title: "Success!!",
                        text: "Movie added to favorites",
                        icon: "success",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "bg-[#e50912] text-white",
                        },
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: data.message,
                        icon: "error",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "bg-[#e50912] text-white",
                        },
                    });
                }
            });
    };

    const handleDeleteMovie = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#e50912",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://movie-portal-server-indol.vercel.app/movies/${id}`,
                    {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Success!!",
                                text: "Movie deleted from favorites successfully",
                                icon: "success",
                                confirmButtonText: "Close",
                                customClass: {
                                    confirmButton: "bg-[#e50912] text-white",
                                },
                            });

                            navigate("/allMovies");
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="max-w-[700px] mx-auto bg-[#f7f7f7] p-5 rounded-lg my-5">
                <div className="h-[350px]">
                    <img
                        className="rounded-lg h-full w-full"
                        src={movieDetails.posterURL}
                        alt={movieDetails.title}
                    />
                </div>
                <div>
                    <div className="mt-4">
                        {movieDetails.genre.map((genre, index) => (
                            <span
                                key={index}
                                className="mt-2 font-semibold border text-[#e50912] border-[#e50912] rounded-full px-2 py-1 m-1"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl font-bold my-3">
                        {movieDetails.title}
                    </h1>
                    <div className="font-semibold my-2">
                        <h1>
                            Duration: {formatDuration(movieDetails.duration)}
                        </h1>
                        <h1>Release Year: {movieDetails.releaseYear}</h1>
                        <div className="flex items-center">
                            <h1 className="mr-2">Rating:</h1>
                            <StarRatings
                                rating={movieDetails.rating}
                                starDimension="20px"
                                starSpacing="5px"
                                starRatedColor="#e50912"
                                starEmptyColor="#E0E0E0"
                                numberOfStars={5}
                                name="rating"
                            />
                            <span className="ml-2">
                                ({movieDetails.rating}/5)
                            </span>
                        </div>
                        <p className="mt-2">Details: {movieDetails.details}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                        <button
                            onClick={handleAddFavorites}
                            className="btn bg-[#e50912] text-white"
                        >
                            Add to favorite
                        </button>
                        <button
                            onClick={() => {
                                handleDeleteMovie(movieDetails._id);
                            }}
                            className="btn bg-[#e50912] text-white"
                        >
                            Delete Movie
                        </button>
                        <Link
                            to={`/update/${movieDetails._id}`}
                            className="btn bg-[#e50912] text-white"
                        >
                            Update Movie
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link
                    className="btn my-3 bg-[#e50912] text-white"
                    to={"/allMovies"}
                >
                    Show All Movie
                </Link>
            </div>
        </div>
    );
};

export default MovieDetails;
