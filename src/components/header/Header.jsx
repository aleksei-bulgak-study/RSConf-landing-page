import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { translate } = this.props;
    const { menuOpen } = this.state;
    const close = this.closeMenu.bind(this);
    const goToPage = (event) => {
      const elem = event.target.nodeName;
      if (elem === 'A') {
        close();
      }
    };

    return (
      <div className="header">
        <p>{translate('title')}</p>
        <CheeseburgerMenu isOpen={menuOpen} closeCallback={close}>
          <ul className="navigation-bar" onClick={goToPage}>
            <li>
              <NavLink exact to="/">
                {translate('home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/authorOfTheDay">{translate('author_of_the_day')}</NavLink>
            </li>
            <li>
              <NavLink to="/search">{translate('author_search')}</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">{translate('team')}</NavLink>
            </li>
            <li>
              <NavLink to="/fulllist">{translate('authors')}</NavLink>
            </li>
          </ul>
        </CheeseburgerMenu>
        <div className="hamburger">
          <HamburgerMenu
            isOpen={menuOpen}
            menuClicked={this.openMenu.bind(this)}
            width={32}
            height={24}
            strokeWidth={3}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  translate: PropTypes.func.isRequired,
};

export default Header;
