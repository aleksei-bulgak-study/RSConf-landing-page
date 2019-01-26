import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import {
  Home, AboutUs, AuthorOfTheDay, Search, SearchResult,
} from './components';

const Main = () => (
  <HashRouter>
    <div className="main">
      <h1>CodeJam</h1>
      <ul className="header">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/authorOfTheDay">Author of the day</NavLink>
        </li>
        <li>
          <NavLink to="/search">Author Search</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">The project team</NavLink>
        </li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/authorOfTheDay" component={AuthorOfTheDay} />
        <Route path="/search" component={Search} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/searchResult" component={SearchResult} />
      </div>
    </div>
  </HashRouter>
);

export default Main;
