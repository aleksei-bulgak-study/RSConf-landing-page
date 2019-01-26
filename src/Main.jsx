import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  Home,
  AboutUs,
  AuthorOfTheDay,
  Search,
  SearchResult,
  AuthorPage,
  Language,
} from './components';
import './styles/style.css';
import Fullist from './components/fulllist/Fullist';
import data from './data/authors.json';

const Main = ({ t }) => (
  <HashRouter>
    <div className="main">
      <h1>{t('title')}</h1>
      <ul className="header">
        <li>
          <NavLink exact to="/">
            {t('home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/authorOfTheDay">{t('author_of_the_day')}</NavLink>
        </li>
        <li>
          <NavLink to="/search">{t('author_search')}</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">{t('team')}</NavLink>
        </li>
        <li>
          <NavLink to="/fulllist">{t('authors')}</NavLink>
        </li>
        {/*  */}
        <li>
          <NavLink to="/authorPage">MyAUrtosfd</NavLink>
        </li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route
          path="/authorOfTheDay"
          component={props => <AuthorOfTheDay {...props} authorsInfo={data} />}
        />
        <Route path="/search" component={Search} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/searchResult" component={SearchResult} />
        <Route path="/fulllist" component={Fullist} />
        {/*  */}
        <Route path="/authorPage" component={props => <AuthorPage {...props} info={data[3]} />} />
      </div>
      <Language />
    </div>
  </HashRouter>
);

Main.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Main);
