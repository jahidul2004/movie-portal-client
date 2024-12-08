import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdateMovie = () => {
    const movie = useLoaderData();

    const [rating, setRating] = useState(movie.rating || 0);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            posterURL: movie.posterURL,
            title: movie.title,
            genre: movie.genre || "",
            duration: movie.duration,
            releaseYear: movie.releaseYear,
            rating: movie.rating,
            details: movie.details,
        },
    });

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        setValue("rating", newRating);
    };

    const onSubmit = (data) => {
        data.genre = [data.genre];
        data.rating = rating;

        console.log("Updated Movie Data:", data);

        fetch(`http://localhost:3000/movies/${movie._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Server Response:", data);
                if (data.modifiedCount === 1) {
                    Swal.fire({
                        title: "Success!!",
                        text: "Movie updated successfully",
                        icon: "success",
                        confirmButtonText: "Close",
                        customClass: {
                            confirmButton: "bg-[#e50912] text-white",
                        },
                    });
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Could not update the movie. Please try again.",
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
        <div>
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Poster URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Movie Poster URL
                                </span>
                            </label>
                            <input
                                {...register("posterURL", {
                                    required: "Poster URL is required",
                                })}
                                type="text"
                                placeholder="Enter Poster URL"
                                className="input input-bordered"
                            />
                            {errors.posterURL && (
                                <span className="text-red-500">
                                    {errors.posterURL.message}
                                </span>
                            )}
                        </div>

                        {/* Movie Title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Movie Title</span>
                            </label>
                            <input
                                {...register("title", {
                                    required: "Title is required",
                                })}
                                type="text"
                                placeholder="Enter Movie Title"
                                className="input input-bordered"
                            />
                            {errors.title && (
                                <span className="text-red-500">
                                    {errors.title.message}
                                </span>
                            )}
                        </div>

                        {/* Genre */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Genre</span>
                            </label>
                            <select
                                {...register("genre", {
                                    required: "Genre is required",
                                })}
                                className="select select-bordered"
                            >
                                <option value="">Select Genre</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Action">Action</option>
                                <option value="Romance">Romance</option>
                            </select>
                            {errors.genre && (
                                <span className="text-red-500">
                                    {errors.genre.message}
                                </span>
                            )}
                        </div>

                        {/* Duration */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Duration (in minutes)
                                </span>
                            </label>
                            <input
                                {...register("duration", {
                                    required: "Duration is required",
                                    min: {
                                        value: 60,
                                        message:
                                            "Minimum duration is 60 minutes",
                                    },
                                })}
                                type="number"
                                placeholder="Enter duration"
                                className="input input-bordered"
                            />
                            {errors.duration && (
                                <span className="text-red-500">
                                    {errors.duration.message}
                                </span>
                            )}
                        </div>

                        {/* Release Year */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Release Year</span>
                            </label>
                            <select
                                {...register("releaseYear", {
                                    required: "Release year is required",
                                })}
                                className="select select-bordered"
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
                            {errors.releaseYear && (
                                <span className="text-red-500">
                                    {errors.releaseYear.message}
                                </span>
                            )}
                        </div>

                        {/* Ratings */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <div className="border p-2 rounded-lg border-[#00000034]">
                                <StarRatings
                                    rating={rating}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    starRatedColor="#e50912"
                                    starEmptyColor="#E0E0E0"
                                    changeRating={handleRatingChange}
                                    numberOfStars={5}
                                    name="rating"
                                />
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text">Summary</span>
                            </label>
                            <textarea
                                {...register("details", {
                                    required: "Summary is required",
                                    minLength: {
                                        value: 10,
                                        message:
                                            "Minimum length is 10 characters",
                                    },
                                })}
                                placeholder="Enter movie summary"
                                className="textarea textarea-bordered"
                            ></textarea>
                            {errors.details && (
                                <span className="text-red-500">
                                    {errors.details.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#e50912] text-white">
                            Update Movie
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMovie;
