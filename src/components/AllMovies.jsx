import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const AllMovies = () => {
    const allMovies = useLoaderData();
    const [movies, setMovies] = useState(allMovies);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-4 my-2 text-[#e50912]">
                All Movies!!
            </h1>

            <div className="flex justify-center gap-1 items-center">
                <input
                    placeholder="Search for a movie"
                    className="input border border-[#e50912]"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 md:gap-10 px-4">
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie}></MovieCard>
                ))}
            </div>
        </div>
    );
};

export default AllMovies;
