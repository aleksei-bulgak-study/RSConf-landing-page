import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './search.css';

const renderCard = (data) => {
  return (
    <section className="search-result col">
      <ul>
        {data.map(({ firstName, lastName, titleImage }) => {
          const address = `/authorPage/${firstName}/${lastName}`;
          return (
            <li key={address} className="card row">
              <img alt="img" src={titleImage} />
              <div className="row">
                <Link className="author-name" key={firstName + lastName} to={address}>
                  {firstName}
                  {' '}
                  {lastName}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchRequest: []};
    this.authorsByCity = [];
    this.authorsByName = [];
  }

  defineAuthors() {
    if (!this.authorsByCity.length && this.authorsByName) {
      this.setState({searchRequest: this.authorsByName});
    } else if (!this.authorsByName.length && this.authorsByCity.length) {
      this.setState({searchRequest: this.authorsByCity});
    } else if (this.authorsByName.length && this.authorsByCity.length) {
      const searhResult = [];
      this.authorsByName.forEach(elem=>{
        if(this.authorsByCity.indexOf(elem) >= 0) {
          searhResult.push(elem);
        }
      })
      this.setState({searchRequest: searhResult});
    }
  }
  

  nameFilter(name) {
    const { authorsInfo } = this.props;
    if(name.length > 0) {
    const arr = authorsInfo.filter(({ firstName, lastName }) => firstName.toLowerCase().search(name) >= 0 || lastName.toLowerCase().search(name) >= 0);
    this.authorsByName = arr;
    } else {
      this.authorsByName = [];
    }
    this.defineAuthors();
  } 

  cityFilter(name) {
    const { authorsInfo } = this.props;
    if(name.length > 0) {
      const arr = authorsInfo.filter(({ locations }) => {
        const city = locations[0].name.toLowerCase();
        return city.search(name) >= 0;
      });
      this.authorsByCity =  arr;
    } else {
      this.authorsByCity =  [];
    }    
    this.defineAuthors();
  }

  handleChangeName(event) {
    const inputValue = event.target.value.toLowerCase();    
      this.nameFilter(inputValue);
  }

  handleChangeCity(event) {
    const inputValue = event.target.value.toLowerCase();
    this.cityFilter(inputValue);
  }

  render() {
    const { searchRequest } = this.state;
    const { t } = this.props;
    return (
      <div className="container">
        <div className="col">
          <section className="search-shape">
            <input
              type="text"
              placeholder={t('search-placeholder')}
              onChange={this.handleChangeName.bind(this)}
            />
            <input type="text" placeholder={t('search-placeholder-city')} onChange={this.handleChangeCity.bind(this)} />
          </section>          
          {renderCard(searchRequest)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  authorsInfo: PropTypes.arrayOf(PropTypes.object),
  t: PropTypes.func,
};
Search.defaultProps = {
  authorsInfo: [],
  t: value => value,
};
export default Search;
