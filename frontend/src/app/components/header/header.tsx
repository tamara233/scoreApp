"use client"
import { useState } from 'react';
import styles from './header.module.scss';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearch = () => {
      console.log('Search query:', searchQuery);
      // You can perform search functionality here
    };
  return (
    <header className={styles.header}>
      <h1>ScorePro</h1>
      <div className={styles.searchContainer}>
      <button className={styles.searchButton} onClick={handleSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      
    </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <button className={styles.sign}>
       Sign out
      </button>
    </header>
  );
};

export default Header;