import React, { useState, useEffect } from 'react';
import './singleRow.css';
import axios from '../../../utils/axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const SingleRow = ({ title, fetchurl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(`${fetchurl}`);
        setMovies(request.data.results);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [fetchurl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      try {
        const movieName = movie?.name || movie?.title || movie?.original_name || '';
        console.log('Searching trailer for:', movieName);
        if (!movieName) {
          console.log('Invalid movie data:', movie);
          return;
        }
        const url = await movieTrailer(movieName);
        console.log('Trailer URL:', url);
        if (!url) {
          console.log('Trailer not found for:', movieName);
          return;
        }
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      } catch (error) {
        console.error('Error fetching trailer:', error.message);
      }
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default SingleRow;