import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesPage from '../component/apipage';
import FavoritesPage from './FavoritesPage';

const App1 = ({ wishlist, setWishlist }) => {  
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MoviesPage wishlist={wishlist} setWishlist={setWishlist} />} 
        />
        <Route
          path="/favorites"
          element={<FavoritesPage wishlist={wishlist} />}
        />
      </Routes>
    </Router>
  );
};

export default App1;
