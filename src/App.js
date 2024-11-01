

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import MoviesPage from './component/apipage.jsx';
import FavoritesPage from './component/FavoritesPage';
import GenrePage from './component/GenrePage.jsx'; 
import Login from './component/Login.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header wishlist={wishlist} setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery */}
      <Routes>
        <Route 
          path="/" 
        />
        <Route 
          path="/apipage" 
          element={<MoviesPage wishlist={wishlist} setWishlist={setWishlist} searchQuery={searchQuery} />} // Pass searchQuery
        />
        <Route 
          path="/favorites" 
          element={<FavoritesPage wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} 
        />
        <Route 
          path="/:genre" // Dynamic route for genres
          element={<GenrePage wishlist={wishlist} setWishlist={setWishlist} searchQuery={searchQuery} />} // Pass searchQuery
        />
        <Route path="/login" element={<Login />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    </Router>
  );
};

export default App;



