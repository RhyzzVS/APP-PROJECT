import { useState, useContext, useRef } from "react";
import { AppContext } from "../context/UseContext";

export default function Navbar() {
  const [isSearch, setIsSearch] = useState(false);
  const { search, setSearch, user, toggleTheme, showProfile, setShowProfile } = useContext(AppContext);
  const searchRef = useRef(null);
  const lockSearch = () => {
    setIsSearch(true);
    setTimeout(() => {
      searchRef.current.focus();
    }, 100);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <h2 className="navbar-logo" style={{ fontSize: "1.8rem", cursor: "pointer" }}>
          VBook
        </h2>
        <button onClick={lockSearch} className="btn-search"></button>
      </div>

      <div className={`navbar-search ${isSearch ? "open" : ""}`}>
        <input
          ref={searchRef}
          type="text"
          placeholder="Cari postingan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => setIsSearch(false)}
          className="navbar-search-input"
        />
      </div>

      <div className="navbar-right">
        <button className="theme-toggle-btn" onClick={toggleTheme}></button>
        <div className="navbar-profile">
          <img
            src={user.profilePicture} 
            className="navbar-avatar" 
            alt="Profile" 
            onClick={() => setShowProfile(!showProfile)}
          />
        </div>
      </div>
    </nav>
  );
}
