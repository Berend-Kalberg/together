import React, { useState, useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import AddFavourites from '../components/AddFavourite';
import RemoveFavourites from '../components/RemoveFavourite';

function Recommender() {
  const { user, isLoading } = useUser();

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async searchValue => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=de5a154b0b354502d8441ebf5607e1b7&query=${searchValue}&language=en-US&page=1&include_adult=false`;

    if (searchValue) {
      const response = await fetch(url);
      const responseJson = await response.json();

      function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const popularityA = a.popularity;
        const popularityB = b.popularity;

        let comparison = 0;
        if (popularityA > popularityB) {
          comparison = -1;
        } else if (popularityA < popularityB) {
          comparison = 1;
        }
        return comparison;
      }

      if (responseJson.results) {
        if (responseJson.results.filter(e => e.poster_path === null).length > 0) {
          const filteredArray = responseJson.results.filter(e => e.poster_path === null);
          console.log(filteredArray);

          const finalArray = responseJson.results.filter(n => !filteredArray.includes(n));

          setMovies(finalArray.sort(compare).slice(0, 9))
          console.log(finalArray.sort(compare).slice(0, 9))
        } else {
          setMovies(responseJson.results.sort(compare).slice(0, 9))
          console.log(responseJson.results.sort(compare).slice(0, 9))
        }
      }
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = items => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const addFavouriteMovie = movie => {
    const newFavouriteList = [...favourites, movie];

    console.log(movie);

    console.log(favourites);

    console.log(newFavouriteList);

    // new.forEach(element => {

    // });

    if (!favourites.includes(movie)) {
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
      console.log(newFavouriteList);
    } else {
      console.log('movie already included in list');
    }
  };

  const removeFavouriteMovie = movie => {
    const newFavouriteList = favourites.filter(favourite => favourite.id !== movie.id);

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <div className="">
            <div className="">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                Recommender
              </h1>
              <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
              <MovieListHeading heading="Movies" />
              <div className="content-start">
                <MovieList
                  movies={movies}
                  handleFavouritesClick={addFavouriteMovie}
                  favouriteComponent={AddFavourites}
                />
              </div>
              <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading="List" />
              </div>
              <div className="content-start">
                <MovieList
                  movies={favourites}
                  handleFavouritesClick={removeFavouriteMovie}
                  favouriteComponent={RemoveFavourites}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {!user && !loading && (
        <>
          <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
              <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                403 Access Denied
              </h1>
              <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                You need to login / signup before being able to access this page <br></br>
                <br></br>Try the sign in button at the top of your screen!
              </p>
            </div>

            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
              <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Recommender, {
  onRedirecting: () => <Loading />
});
