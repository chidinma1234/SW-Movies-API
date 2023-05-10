import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import Loader from './icons/Loader';

const Cards = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films`);
        setFilms(response.data.results);
        console.log(films);
      } catch (err) {
        console.log(err.message);
        //setFilms(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [films]);

  const MovieDetails = films.map((film) => (
    <Card key={film.episode_id} film={film} />
  ));

  return (
    <div className="App">
      {loading ? (
        <Loader className="loader" />
      ) : (
        <div className="movie-grid">{MovieDetails}</div>
      )}
    </div>
  );
};

export default Cards;
