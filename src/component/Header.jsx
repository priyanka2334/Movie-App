









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = ({ wishlist, setSearchQuery }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // For main nav
//   const [isMenu1Open, setIsMenu1Open] = useState(false); // For genres

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const toggleMenu1 = () => {
//     setIsMenu1Open((prev) => !prev);
//   };

//   return (
//     <>
//       <header className="header">
//         <h1>My TV Shows App</h1>
//         <button className="hamburger" onClick={toggleMenu}>
//           &#9776; 
//         </button>
//         <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/apipage">TV Shows</Link></li>
//             <li><Link to="/favorites">Favorites ({wishlist.length})</Link></li>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//       </header>
//       <div className="search-bar">
//         <input 
//           type="text" 
//           placeholder="Search movies..." 
//           className="inputBox" 
//           onChange={handleSearchChange} 
//         />
//       </div>
//       <div>
//         <button className="hamburger" onClick={toggleMenu1}>
//           &#9776; {/* Hamburger icon for second nav (genres) */}
//         </button>
//         <nav className={`nav1 ${isMenu1Open ? 'active' : ''}`}>
//           <ul className="second-header">
//             <li><Link to="/horror">Horror</Link></li>
//             <li><Link to="/comedy">Comedy</Link></li>
//             <li><Link to="/action">Action</Link></li>
//             <li><Link to="/drama">Drama</Link></li>
//             <li><Link to="/thriller">Thriller</Link></li>
//             <li><Link to="/fantasy">Fantasy</Link></li>
//             <li><Link to="/mystery">Mystery</Link></li>
//             <li><Link to="/adventure">Adventure</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ wishlist, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenu1Open, setIsMenu1Open] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleMenu1 = () => {
    setIsMenu1Open((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <h1>My TV Shows App</h1>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/apipage">TV Shows</Link></li>
            <li><Link to="/favorites">Favorites ({wishlist.length})</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search movies..." 
          className="inputBox" 
          onChange={handleSearchChange} 
        />
      </div>
      <div className="genre-menu">
        <button className="hamburger" onClick={toggleMenu1}>
          &#9776; 
        </button>
        <nav className={`nav1 ${isMenu1Open ? 'active' : ''}`}>
          <ul className="second-header">
            <li><Link to="/horror">Horror</Link></li>
            <li><Link to="/comedy">Comedy</Link></li>
            <li><Link to="/action">Action</Link></li>
            <li><Link to="/drama">Drama</Link></li>
            <li><Link to="/thriller">Thriller</Link></li>
            <li><Link to="/fantasy">Fantasy</Link></li>
            <li><Link to="/mystery">Mystery</Link></li>
            <li><Link to="/adventure">Adventure</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
