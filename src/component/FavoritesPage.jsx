
import React from 'react';
import './Home.css';

const FavoritesPage = ({ wishlist = [], removeFromWishlist }) => {
  return (
    <div>
      <h1 className='f-head'>Favorites</h1>
      <div className="favorites-list">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.id} className="favorite-item">
              {item.image && <img src={item.image.medium} alt={item.name} />}
              <h3>{item.name}</h3>
              <button onClick={() => removeFromWishlist(item.id)} className="remove-btn">Remove</button>
            </div>
          ))
        ) : (
          <p>No favorites added.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;


















