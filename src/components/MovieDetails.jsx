import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
    const movieDetails = useLoaderData();
    console.log(movieDetails);

    const navigate = useNavigate();

    const handleAddFavorites = () => {
        fetch("http://localhost:3000/favoriteMovies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieDetails),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Success!!",
                        text: "Movie added to favorites",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: data.message,
                        icon: "error",
                        confirmButtonText: "Close",
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
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/movies/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Success!!",
                                text: "Movie deleted from favorites successfully",
                                icon: "success",
                                confirmButtonText: "Close",
                            });

                            navigate("/allMovies");
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-[700px] mx-auto bg-[#f7f7f7] p-5 rounded-lg my-5">
            <div>
                <img
                    className="rounded-lg"
                    src={movieDetails.posterURL}
                    alt=""
                />
            </div>
            <div>
                <div className="mt-4">
                    {movieDetails.genre.map((genre) => (
                        <span className="mt-2 font-semibold border text-[#e50912] border-[#e50912] rounded-full px-2 py-1 m-1">
                            {genre}
                        </span>
                    ))}
                </div>
                <h1 className="text-3xl font-bold my-3">
                    {movieDetails.title}
                </h1>
                <div className="font-semibold my-2">
                    <h1>Duration:{movieDetails.duration}Hours</h1>
                    <h1>Release Year:{movieDetails.releaseYear}</h1>
                    <h1>Rating:{movieDetails.rating}</h1>
                    <p className="mt-2">Details:{movieDetails.details}</p>
                </div>
                <div className="flex gap-3 mt-4">
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
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
