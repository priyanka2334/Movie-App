


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './apipage.css';

const MoviesPage = ({ wishlist, setWishlist, searchQuery }) => {
  const [shows, setShows] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);
  const showsPerPage = 20;

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Error fetching shows:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentShows = filteredShows.slice((page - 1) * showsPerPage, page * showsPerPage);

  const toggleWishlist = (show) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.id === show.id)
        ? prevWishlist.filter((item) => item.id !== show.id)
        : [...prevWishlist, show]
    );
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < Math.ceil(filteredShows.length / showsPerPage)) setPage(page + 1);
  };

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const closeModal = () => {
    setSelectedShow(null);
  };

  return (
    <div>
     
      <h1 className="heading">TV Shows</h1>
      {loading ? (
        <p>Loading shows...</p>
      ) : (
        <div className="movies-list">
          {currentShows.map((show) => (
            <div key={show.id} className="movie-item">
              {show.image && (
                <img
                  src={show.image.medium}
                  alt={show.name}
                  onClick={() => handleShowClick(show)}
                  style={{ cursor: 'pointer' }}
                />
              )}
              <h3>{show.name}</h3>
              <p>Premiered: {show.premiered ? show.premiered : "N/A"}</p>
              <span
                className="wishlist-heart"
                onClick={() => toggleWishlist(show)}
                style={{ cursor: 'pointer' }}
              >
                {wishlist.some(item => item.id === show.id) ? '❤️' : '🤍'}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button onClick={handlePrevious} disabled={page === 1} className="next">
          Previous
        </button>
        <span>Page {page} of {Math.ceil(filteredShows.length / showsPerPage)}</span>
        <button onClick={handleNext} disabled={page === Math.ceil(filteredShows.length / showsPerPage)} className="next">
          Next
        </button>
      </div>

      {selectedShow && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedShow.name}</h2>
            {selectedShow.image && (
              <img src={selectedShow.image.medium} alt={selectedShow.name} />
            )}
            <p><strong>Premiered:</strong> {selectedShow.premiered || "N/A"}</p>
            <p><strong>Language:</strong> {selectedShow.language}</p>
            <p><strong>Genres:</strong> {selectedShow.genres.join(", ")}</p>
            <p><strong>Summary:</strong> {selectedShow.summary ? selectedShow.summary.replace(/<[^>]+>/g, '') : "No summary available."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
