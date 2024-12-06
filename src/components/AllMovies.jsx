import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';

const AllMovies = () => {

    const allMovies = useLoaderData();

    const [movies, setMovies] = useState(allMovies);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center p-4 my-2 text-[#e50912]'>All Movies!!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 px-4'>
                {
                    movies.map(movie => <MovieCard key={movie._id} movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;