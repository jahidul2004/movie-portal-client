import Swal from "sweetalert2";

const AddMovie = () => {
    const handleAddMovie = (event) => {
        event.preventDefault();
        const form = event.target;

        const posterURL = form.posterURL.value;
        const title = form.title.value;
        const duration = form.duration.value;
        const releaseYear = form.releaseYear.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const genre = form.genre.value.split(",");

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

        fetch("http://localhost:3000/movies", {
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
                        title: "Success!!",
                        text: "Movie added successfully",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Sorry, something went wrong",
                        icon: "error",
                        confirmButtonText: "Close",
                    });
                    form.reset();
                }
            });
    };

    return (
        <div className="my-5">
            <h1 className="text-3xl font-bold text-center p-4 my-2 text-[#e50912]">
                Add movies!
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
                                <span className="label-text">Movies Title</span>
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
                            <input
                                name="genre"
                                type="text"
                                placeholder="Enter genre using comma (,)"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input
                                name="duration"
                                type="text"
                                placeholder="Enter duration"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Release Year</span>
                            </label>
                            <input
                                name="releaseYear"
                                type="text"
                                placeholder="Enter release year"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input
                                name="rating"
                                type="text"
                                placeholder="Enter rating out of 5"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input
                                name="details"
                                type="text"
                                placeholder="Enter movie details"
                                className="input input-bordered"
                                required
                            />
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
