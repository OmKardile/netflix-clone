import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div>
      <div className="w-full h-[600px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div>
            <div className="absolute w-full top-[30%] p-4 md:p-9">
              <h1 className="text-4xl md:text-6xl w-[50%]">{movie?.title}</h1>

              <div className="my-5">
                <button className="border bg-gray-200 hover:bg-white text-red-700 py-2 px-5 border-gray-100">
                  Play
                </button>
                <button className="border bg- text-white hover:bg-neutral-800 py-2 px-5 ml-0 border-gray-100">
                  Watch Later
                </button>
              </div>
              <p className="text-gray-400 text-lg m-1">Released : {movie?.release_date}</p>
              <p className="text-gray-200 text-lg sm:w-[90%] lg:w-[50%] xl:w-[45%] m-1">{truncateString(movie?.overview,250)}</p>
            <p className=""></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
