import React from "react";
import { useState, useEffect } from "react";
import './Manual.css'
import axios from "axios";
import cheerio from "cheerio";


const Manual = () => {
  const [number, setNumber] = useState(10);
  const [HighlightedMovie, setHighlitedMovie] = useState();
  const imdbId = '0114709'; // Replace this with the IMDb ID you want to display

  

  const listOfMovies = Array.from({length :number}, (_,index) => (
    <li 
    key={index}
    style={{ backgroundColor: index % 2 === 0 ? 'lightblue' : 'lightgreen' }}
    ><MovieWidget/></li>
  ));

  return (
        <div>
          <ul>{listOfMovies}</ul>
        </div>
      
  );
};

export default Manual;

const MovieWidget = ({ imdbId, setHighlightedMovie }) => {
  const movieId = Math.floor(Math.random() * 999999);

  const link = `https://www.imdb.com/title/tt0${movieId}/?ref_=chttp_t_${Math.floor(
    Math.random() * 99
  )}`;

  const getMovieDetails = async () => {
    try {
      const response = await axios.get(link);
      const $ = cheerio.load(response.data);
      const posterUrl = $('.poster img').attr('src'); // Adjust this selector based on IMDb's HTML structure
      console.log("Scrapping successful!");
      setHighlightedMovie({ id: movieId, posterUrl });
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="MovieWidget">
      <a href={link} target="_blank" rel="noopener noreferrer">
        MovieName
      </a>
    </div>
  );
};

const DisplayDetails = ({ movie }) => {
  return (
    <div>
      <img src={movie.posterUrl} alt="" />
    </div>
  );
};