import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider = () => {
    return (
        <div>
            {/* <div className="carousel w-full">
                <div
                    id="slide1"
                    className="h-[400px] carousel-item relative w-full"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/nrL9w3H/maxresdefault.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#e50912]">
                                Unlimited movies, TV shows, <br /> and more
                            </h1>
                            <p className="text-white my-3 font-semibold">
                                "Discover movies, explore genres, and watch
                                trailers – your <br /> ultimate movie
                                destination!"
                            </p>
                            <Link
                                className="btn hover:text-[#e50912] bg-[#e50912] text-white border-none"
                                to={"/allMovies"}
                            >
                                Explore This
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    id="slide2"
                    className="h-[400px] carousel-item relative w-full"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/3C0p21h/346273044-788858786091795-484122195385889758-n.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#e50912]">
                                Dive into the World of <br /> Movies and Shows
                            </h1>
                            <p className="text-white my-3 font-semibold">
                                "From classics to the latest hits, enjoy
                                seamless <br /> streaming for every mood."
                            </p>
                            <Link
                                className="btn hover:text-[#e50912] bg-[#e50912] text-white border-none"
                                to={"/allMovies"}
                            >
                                Explore This
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    id="slide3"
                    className="h-[400px] carousel-item relative w-full"
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/pbjy7cT/1720092085-surang-lead.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#e50912]">
                                Unlimited Entertainment at <br /> Your
                                Fingertips
                            </h1>
                            <p className="text-white my-3 font-semibold">
                                "Unlimited access to blockbusters, series, and{" "}
                                <br />
                                exclusive content for all."
                            </p>
                            <Link
                                className="btn hover:text-[#e50912] bg-[#e50912] text-white border-none"
                                to={"/allMovies"}
                            >
                                Explore This
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}

            <Carousel>
                <div className="h-[350px] md:h-[450px] lg:h-[550px] w-full">
                    <img
                        className="h-full w-full object-cover"
                        src="https://i.ibb.co.com/ZXYLB70/05ed3663-71ba-4e60-ae36-13f279867f55.jpg"
                    />
                </div>
                <div className="h-[350px] md:h-[450px] lg:h-[550px] w-full">
                    <img
                        className="h-full w-full object-cover"
                        src="https://i.ibb.co.com/sjyHtmc/0a9ddc30-5d75-4959-82a9-48b88b2303df-1.jpg"
                    />
                </div>
                <div className="h-[350px] md:h-[450px] lg:h-[550px] w-full">
                    <img
                        className="h-full w-full object-cover"
                        src="https://i.ibb.co.com/QkK12XS/thumbnails-7454bcba7bb17c330d9a239a9c49a3dd-goplay-baaji.webp"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;
