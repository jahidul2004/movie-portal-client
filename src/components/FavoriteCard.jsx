import StarRatings from "react-star-ratings";

const FavoriteCard = ({ movie, handleDeleteFavorite }) => {
    const formatDuration = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}h ${minutes}m`;
    };

    return (
        <div className="p-5 rounded-lg border-2">
            <div className="bg-[#f7f7f7] rounded-lg h-[280px]">
                <img
                    className="h-full rounded-lg"
                    src={movie.posterURL}
                    alt={movie.title}
                />
            </div>
            <div>
                <div className="my-3">
                    {movie.genre.map((genre, index) => (
                        <span
                            key={index}
                            className="mt-2 font-semibold border text-[#e50912] border-[#e50912] rounded-full px-2 py-1 m-1"
                        >
                            {genre}
                        </span>
                    ))}
                </div>
                <h1 className="text-2xl font-bold">{movie.title}</h1>
                <div className="font-semibold my-2">
                    <h1>Duration: {formatDuration(movie.duration)}</h1>
                    <h1>Release Year: {movie.releaseYear}</h1>
                    <div className="flex items-center">
                        <h1 className="mr-2">Rating:</h1>
                        <StarRatings
                            rating={movie.rating}
                            starDimension="20px"
                            starSpacing="5px"
                            starRatedColor="#e50912"
                            starEmptyColor="#E0E0E0"
                            numberOfStars={5}
                            name="rating"
                        />
                        <span className="ml-2">({movie.rating}/5)</span>
                    </div>
                </div>
            </div>

            <button
                onClick={() => {
                    handleDeleteFavorite(movie._id);
                }}
                className="hover:text-black mt-3 w-max btn bg-[#e50912] text-white"
            >
                Delete Movie
            </button>
        </div>
    );
};

export default FavoriteCard;
