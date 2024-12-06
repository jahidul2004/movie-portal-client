import { useLoaderData } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";

const FavoriteMovies = () => {
    const favoritesMovies = useLoaderData();

    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-4 my-2 text-[#e50912]">
                Favorite Movies!
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 px-4">
                {favoritesMovies.map((movie) => (
                    <FavoriteCard key={movie._id} movie={movie}></FavoriteCard>
                ))}
            </div>
        </div>
    );
};

export default FavoriteMovies;
