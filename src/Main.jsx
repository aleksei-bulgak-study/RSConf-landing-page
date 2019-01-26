import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import {
  Home, AboutUs, AuthorOfTheDay, Search, SearchResult, AuthorPage,
} from './components';
import './styles/style.css';
import Fullist from './components/fulllist/Fullist';

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
        <li>
          <NavLink to="/fulllist">Authors</NavLink>
        </li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/authorOfTheDay" component={AuthorOfTheDay} />
        <Route path="/search" component={Search} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/searchResult" component={SearchResult} />
        <Route path="/fulllist" component={Fullist} />
        <Route path="/authorPage" component={AuthorPage} />
      </div>
      <div className="lang"><button type="button">lang</button></div>
    </div>
  </HashRouter>
);

export default Main;
