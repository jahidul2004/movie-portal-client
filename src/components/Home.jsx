import { Link, useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import MovieCard from "./MovieCard";

const Home = () => {
    const movies = useLoaderData();

    const genres = [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Horror",
        "Thriller",
        "Sci-Fi",
        "Fantasy",
        "Animation",
        "Romance",
        "Mystery",
        "Documentary",
        "Biography",
        "Musical",
        "Historical",
    ];

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
            <div className="flex justify-center my-4">
                <Link to={"/allMovies"} className="btn bg-[#e50912] text-white">
                    Show All Movies!
                </Link>
            </div>
            <h1 className="text-3xl font-bold text-[#e50912] m-4 text-center py-6">
                Upcoming Release! <br />
                ------------------------------
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    className="hero h-[400px]"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/nrL9w3H/maxresdefault.jpg)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl text-[#e50912] border-4 border-dashed p-5">
                            <p className="font-bold">01.01.2025</p>
                            <h1 className="text-6xl font-bold text-center">
                                Pushpa-2!
                            </h1>
                            <p className="text-lg font-bold">
                                Only on Movie Portal
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="hero h-[400px]"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/8X4WPnF/P.jpg)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl text-[#e50912] border-4 border-dashed p-5">
                            <p className="font-bold">01.03.2025</p>
                            <h1 className="text-6xl font-bold text-center">
                                Pathaan!
                            </h1>
                            <p className="text-lg font-bold">
                                Only on Movie Portal
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="hero h-[400px] md:col-span-2"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/5cB6XnN/cadd83f3-303d-47ab-9327-7fd29a7d363d.webp)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-20"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl text-[#e50912] border-4 border-dashed p-5">
                            <p className="font-bold">01.05.2025</p>
                            <h1 className="text-6xl font-bold text-center">
                                Rajkumar!
                            </h1>
                            <p className="text-lg font-bold">
                                Only on Movie Portal
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-[#e50912] m-4 text-center py-6">
                Trending Genres! <br />
                ------------------------------
            </h1>
            <div className="m-5 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-center items-center">
                {genres.map((genre) => (
                    <p className="text-lg border-2 border-dashed border-[#e50912] rounded-3xl w-max px-4 py-2 font-bold">
                        {genre}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Home;
