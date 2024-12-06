import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import MovieCard from "./MovieCard";

const Home = () => {
    const movies = useLoaderData();

    const topRatedMovies = movies
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    return (
        <div>
            <Slider></Slider>

            <h1 className="text-3xl font-bold text-[#e50912] m-4 text-center py-6">
                Featured Movies! <br />
                ------------------------------
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {topRatedMovies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie}></MovieCard>
                ))}
            </div>
        </div>
    );
};

export default Home;
