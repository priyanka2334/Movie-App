import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GenrePage.css';

const GenrePage = ({ wishlist, setWishlist, searchQuery }) => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const MOVIES_PER_PAGE = 20;

  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows`);
        const data = await response.json();

        const filteredMovies = data.filter(movie =>
          movie.genres.some(g => g.toLowerCase() === genre.toLowerCase())
        );

        const searchedMovies = filteredMovies.filter(movie =>
          movie.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setMovies(searchedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenreMovies();
  }, [genre, searchQuery]);

  const addToWishlist = (movie) => {
    setWishlist((prevWishlist) => [...prevWishlist, movie]);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const startIndex = (page - 1) * MOVIES_PER_PAGE;
  const endIndex = startIndex + MOVIES_PER_PAGE;
  const currentMovies = movies.slice(startIndex, endIndex);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="genre-page">
      <h2>{genre.charAt(0).toUpperCase() + genre.slice(1)} Movies</h2>
      <ul>
        {currentMovies.length > 0 ? (
          currentMovies.map((movie) => {
            // Check if the movie is already in the wishlist
            const isInWishlist = wishlist.some(wish => wish.id === movie.id);
            return (
              <li key={movie.id}>
                {movie.image && (
                  <img 
                    src={movie.image.medium} 
                    alt={movie.name} 
                  />
                )}
                <h3>{movie.name}</h3>
                <span 
                  onClick={() => {
                    if (!isInWishlist) {
                      addToWishlist(movie);
                    }
                  }}
                  style={{ cursor: 'pointer', fontSize: '24px' }} // Style for heart icon
                >
                  {isInWishlist ? '❤️' : '🤍'}
                </span>
              </li>
            );
          })
        ) : (
          <p>No movies found in this genre.</p>
        )}
      </ul>
      <div className="pagination-buttons">
        <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={endIndex >= movies.length}>Next</button>
      </div>
    </div>
  );
};

export default GenrePage;
