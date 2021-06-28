import React from 'react';
import Image from 'next/image';

const MovieList = props => {
  const FavouriteComponent = props.favouriteComponent;
  const posterUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';

  return (
    <>
      <div className="flex flex-wrap">
        {props.movies.map((movie, index) => (
          <div key={index} className="">
            <div className="w-48 my-2 image-container mx-4 border rounded-md overflow-hidden border-gray-300 bg-indigo-400 shadow-2xl">
              {movie.poster_path && <img src={posterUrl + movie.poster_path} alt="movie poster"></img>}
              {!movie.poster_path && (
                <Image src="/poster-not-available.png" alt="default movie poster" width={600} height={900} />
              )}
              <div className="overlay justify-end flex" onClick={() => props.handleFavouritesClick(movie)}>
                <FavouriteComponent />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
