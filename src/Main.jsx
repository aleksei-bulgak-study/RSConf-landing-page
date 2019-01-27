import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  Home,
  AboutUs,
  AuthorOfTheDay,
  Search,
  OpenAuthorComponent,
  Language,
} from './components';
import './styles/style.css';
import FullList from './components/fulllist/Fullist';
import data from './data/authors.json';
import Footer from './components/footer/Footer';

const FullListWrapped = withNamespaces()(FullList);

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
    };
    this.onLanguageChangeHanler = this.onLanguageChangeHanler.bind(this);
  }

  onLanguageChangeHanler(lang) {
    this.setState({
      language: lang,
    });
  }

  render() {
    const { t } = this.props;
    const { language } = this.state;
    return (
      <HashRouter>
        <React.Fragment>
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
            </ul>
            <div className="content">
              <Route
                exact
                path="/"
                component={props => <Home {...props} t={t} authorsInfo={data} />}
              />
              <Route
                path="/authorOfTheDay"
                component={props => <AuthorOfTheDay {...props} t={t} authorsInfo={data} />}
              />
              <Route
                path="/search"
                component={props => (
                  <Search
                    {...props}
                    language={language}
                    authorsInfo={data}
                  />
                )}
              />
              <Route path="/aboutus" component={withNamespaces()(AboutUs)} />
              <Route
                path="/fulllist"
                component={props => (
                  <FullListWrapped
                    {...props}
                    language={language}
                    authorsInfo={data}
                  />
                )}
              />
              <Route
                path="/authorPage/:firstName/:lastName"
                component={
                  params => (
                    <OpenAuthorComponent
                      authors={data}
                      firstName={params.match.params.firstName}
                      lastName={params.match.params.lastName}
                    />
                  )
                }
              />
            </div>
          </div>
          <Language onLanguageChangeHanler={this.onLanguageChangeHanler} />
          <Footer />
        </React.Fragment>
      </HashRouter>
    );
  }
}

Main.propTypes = {
  t: PropTypes.func,
};

Main.defaultProps = {
  t: value => value,
};

export default withNamespaces()(Main);
