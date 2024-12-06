import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Trending = () => {
    const movies = useLoaderData();
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/G09xJxj/trending.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-6xl font-bold">
                            Unlimited movies, TV shows, and more
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link
                            to={"/"}
                            className="btn border-none hover:text-[#e50912] bg-[#e50912] text-white"
                        >
                            Explore Trends!
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-5 flex flex-col md:flex-row gap-5 mx-4">
                <div
                    className="hero h-[400px]"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/nrL9w3H/maxresdefault.jpg)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                            <Link
                                to={"/allMovies"}
                                className="btn bg-[#e50912] text-white border-none hover:text-[#e50912]"
                            >
                                Explore More
                            </Link>
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
                        <div className="max-w-xl">
                            <Link
                                to={"/allMovies"}
                                className="btn bg-[#e50912] text-white border-none hover:text-[#e50912]"
                            >
                                Explore More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;
