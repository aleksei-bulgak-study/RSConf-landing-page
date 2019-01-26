import React from 'react';
import { NavLink } from 'react-router-dom';
import './search.css';

const Search = () => (
  <div>
    <h2>Search</h2>
    <p>Search</p>
    <input type="text" />
    <NavLink to="/searchResult">
      <button type="submit">Search</button>
    </NavLink>
  </div>
);

export default Search;
