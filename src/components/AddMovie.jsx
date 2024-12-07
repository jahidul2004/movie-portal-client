import React, { useState } from "react";
import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";

const AddMovie = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (newRating) => {
        setRating(newRating);
    };

    const handleAddMovie = (event) => {
        event.preventDefault();
        const form = event.target;

        const posterURL = form.posterURL.value.trim();
        const title = form.title.value.trim();
        const genre = [form.genre.value.trim()];
        const duration = parseInt(form.duration.value.trim());
        const releaseYear = form.releaseYear.value.trim();
        const details = form.details.value.trim();

        if (!/^https?:\/\/.+$/.test(posterURL)) {
            Swal.fire({
                title: "Invalid URL!",
                text: "Please enter a valid poster URL.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }

        if (title.length < 2) {
            Swal.fire({
                title: "Invalid Title!",
                text: "Title must be at least 2 characters long.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }

        if (!genre) {
            Swal.fire({
                title: "Invalid Genre!",
                text: "Please select a genre.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }

        if (isNaN(duration) || duration < 60) {
            Swal.fire({
                title: "Invalid Duration!",
                text: "Duration must be at least 60 minutes.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }

        if (!releaseYear) {
            Swal.fire({
                title: "Invalid Release Year!",
                text: "Please select a release year.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }

        if (rating === 0) {
            Swal.fire({
                title: "Invalid Rating!",
                text: "Please select a rating.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }

        if (details.length < 10) {
            Swal.fire({
                title: "Invalid Summary!",
                text: "Summary must be at least 10 characters long.",
                icon: "error",
                confirmButtonText: "Close",
            });
            return;
        }

        const newMovie = {
            posterURL,
            title,
            genre,
            duration,
            releaseYear,
            rating,
            details,
        };

        console.log(newMovie);

        fetch("https://movie-portal-server-indol.vercel.app/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMovie),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Success!",
                        text: "Movie added successfully.",
                        icon: "success",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "bg-[#e50912] text-white",
                        },
                    });
                    form.reset();
                    setRating(0);
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Sorry, something went wrong.",
                        icon: "error",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "bg-[#e50912] text-white",
                        },
                    });
                }
            });
    };

    return (
        <div className="my-5">
            <h1 className="text-3xl font-bold text-center p-4 my-2 text-[#e50912]">
                Add Movie
            </h1>

            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleAddMovie} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Movie Poster URL
                                </span>
                            </label>
                            <input
                                name="posterURL"
                                type="text"
                                placeholder="Enter Poster URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Enter Movie Title"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <select
                                name="genre"
                                className="select select-bordered"
                                required
                            >
                                <option value="">Select Genre</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Action">Action</option>
                                <option value="Romance">Romance</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Duration (in minutes)
                                </span>
                            </label>
                            <input
                                name="duration"
                                type="number"
                                placeholder="Enter duration"
                                className="input input-bordered"
                                min="60"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Release Year</span>
                            </label>
                            <select
                                name="releaseYear"
                                className="select select-bordered"
                                required
                            >
                                <option value="">Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <div
                                className="border p-2 rounded-lg border-[#00000034]"
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <StarRatings
                                    rating={rating}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    starRatedColor="#e50912"
                                    starEmptyColor="#E0E0E0"
                                    changeRating={handleRating}
                                    numberOfStars={5}
                                    name="rating"
                                />
                            </div>
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <textarea
                                name="details"
                                placeholder="Enter movie summary"
                                className="textarea textarea-bordered"
                                minLength="10"
                                required
                            ></textarea>
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#e50912] text-white">
                            Add Movie
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;
