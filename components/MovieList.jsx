import React from 'react';
import Image from 'next/image';

const MovieList = props => {
  const FavouriteComponent = props.favouriteComponent;
  const posterUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className="w-full md:max-w-full py-6 md:flex">
          <div className="sm:h-auto border-gray-400 border sm:w-48 flex-none bg-cover rounded-t lg:rounded-t-none md:rounded-l text-center overflow-hidden">
            {movie.poster_path && <img src={posterUrl + movie.poster_path} alt="movie poster"></img>}
            {!movie.poster_path && (
              <Image src="/poster-not-available.png" alt="default movie poster" width={600} height={900} />
            )}
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal3">
            <div className="mb-8"></div>
            <div className="text-gray-900 font-bold text-xl mb-2">{movie.title}</div>
            <p className="text-gray-700 text-base">{movie.overview}</p>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-600">{movie.release_date}</p>
              </div>
            </div>
            <div className="button-container flex justify-between mb-2">
              <div onClick={() => props.handleFavouritesClick(movie)}>
                <FavouriteComponent />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
