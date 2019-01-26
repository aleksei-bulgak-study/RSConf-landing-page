import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from '../home/Home';
import AboutUs from '../aboutUs/AboutUs';
import AuthOfTheDay from '../authOfTheDay/AuthOfTheDay';
import Search from '../search/Search';
import Author from '../author/Author';

const Main = () => (
  <HashRouter basename="/RSConf-landing-page">
    <div>
      <h1>CodeJam</h1>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/AuthofTheDay">Author of the day</NavLink></li>
        <li><NavLink to="/search">Author Search</NavLink></li>
        <li><NavLink to="/aboutus">The project team</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/AuthofTheDay" component={AuthOfTheDay} />
        <Route path="/search" component={Search} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/author" component={Author} />
      </div>
    </div>
  </HashRouter>
);

export default Main;
