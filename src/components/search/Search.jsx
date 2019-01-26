import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './search.css';

const renderCard = (data) => {
  console.log(data);
  return (
    <section className="search-result col">
      <ul>
        {data.map(({ firstName, lastName, titleImage }) => {
          const address = `/authorPage/${firstName}/${lastName}`;
          return (
            <li key={address} className="card row">
              <img alt="img" src={titleImage} />
              <div className="row">
                <Link
                  className="author-name"
                  key={firstName + lastName}
                  to={address}
                >
                  { firstName }
                  {' '}
                  { lastName}
                </Link>

              </div>
            </li>
          );
        })
        }
      </ul>
    </section>
  );
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchRequest: [] };
  }

  handleChange(event) {
    const { authorsInfo } = this.props;
    const inputValue = event.target.value.toLowerCase();
    if (inputValue.length > 0) {
      const arr = authorsInfo.filter(({ firstName, lastName }) => firstName.toLowerCase().search(inputValue) >= 0 || lastName.toLowerCase().search(inputValue) >= 0); // eslint-disable-line
      this.setState({ searchRequest: arr });
    } else {
      this.setState({ searchRequest: [] });
    }
  }

  render() {
    const { searchRequest } = this.state;
    return (
      <div className="container">
        <div className="col">
          <section className="search-shape">
            <input type="text" placeholder="search author" onChange={this.handleChange.bind(this)} />
          </section>
          {renderCard(searchRequest)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  authorsInfo: PropTypes.arrayOf(
    PropTypes.object,
  ),
};
Search.defaultProps = {
  authorsInfo: [],
};
export default Search;
