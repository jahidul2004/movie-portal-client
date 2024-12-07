import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="p-5 rounded-lg border-2">
            <div className="bg-[#f7f7f7] rounded-lg h-[280px]">
                <img className="h-full rounded-lg" src={movie.posterURL} />
            </div>
            <div>
                <div className="my-3">
                    {movie.genre.map((genre) => (
                        <span className="mt-2 font-semibold border text-[#e50912] border-[#e50912] rounded-full px-2 py-1 m-1">
                            {genre}
                        </span>
                    ))}
                </div>
                <h1 className="text-2xl font-bold">{movie.title}</h1>
                <div className="font-semibold my-2">
                    <h1>Duration:{movie.duration}Hours</h1>
                    <h1>Release Year:{movie.releaseYear}</h1>
                    <h1>Rating:{movie.rating}/5</h1>
                </div>
            </div>

            <Link
                to={`/movies/${movie._id}`}
                className="mt-3 w-max btn bg-[#e50912] text-white"
            >
                See Details
            </Link>
        </div>
    );
};

export default MovieCard;
