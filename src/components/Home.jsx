import { Link, useLoaderData } from "react-router-dom";
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
        </div>
    );
};

export default Home;
