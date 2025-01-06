import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const AllMovies = () => {
    const allMovies = useLoaderData();
    const [movies, setMovies] = useState(allMovies);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortCriteria, setSortCriteria] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
        let sortedMovies = [...movies];

        if (e.target.value === "rating") {
            sortedMovies.sort((a, b) => b.rating - a.rating);
        } else if (e.target.value === "releaseYear") {
            sortedMovies.sort((a, b) => b.releaseYear - a.releaseYear);
        }

        setMovies(sortedMovies);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-4 my-2 text-[#e50912]">
                All Movies!!
            </h1>

            <div className="flex justify-center gap-2 items-center">
                <input
                    placeholder="Search for a movie"
                    className="input border border-[#e50912]"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select
                    className="select border border-[#e50912]"
                    value={sortCriteria}
                    onChange={handleSortChange}
                >
                    <option value="">Sort By</option>
                    <option value="rating">Rating</option>
                    <option value="releaseYear">Release Year</option>
                </select>
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
