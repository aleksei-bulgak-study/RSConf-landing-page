import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import AuthorOfTheDay from '../authorOfTheDay/AuthorOfTheDay';

const Home = props => (
  <div className="homepage">
    <h2>Добро пожаловать на нашу страничку посвященную Поэтам Беларуси!</h2>
    <p>
      Благодаря данному ресурсу вы можете быстро найти необходиомого Вам
      поэта и ознакомиться с его деятельностью. Не стесняйтесь, начинайте
      <NavLink to="/search"> поиск </NavLink>
      или же пройдите к полному
      <NavLink to="/fulllist"> списку </NavLink>
      :)
    </p>
    <div className="author-of-the-day">
      <h2>Автор Дня!</h2>
      <AuthorOfTheDay {...props} />
    </div>
  </div>
);

export default Home;
