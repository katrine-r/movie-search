import React from 'react';
import './App.css';
import LogInIcon from './icons/LogInIcon';
import LogoIcon from './icons/LogoIcon';
import RegistrationIcon from './icons/RegistrationIcon';
import SearchIcon from './icons/SearchIcon';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Logo">
          <a href="#">
            <span><LogoIcon /></span>
            <span><h3>Movie Search</h3></span>
          </a>
        </div>
        <nav className="Navigation">
          <ul>
            <li><a href="#">Фильмы</a></li>
            <li><a href="#">Сериалы</a></li>
            <li><a href="#">Люди</a></li>
          </ul>
        </nav>
        <div className="SearchContent">
          <a href="#"><SearchIcon /></a>
        </div>
        <div className="LogInWrapper">
          <div className="LogIn">
            <a href="#">
              <span className="LogInContent">
                <span><LogInIcon /></span>
                <span>&nbsp;Вход</span> 
              </span>
            </a>
          </div>
          <div className="Registration">
            <a href="#">
              <span className="RegistrationContent">
                <span><RegistrationIcon /></span>
                <span>&nbsp;Регистрация</span>
              </span>
            </a>
          </div>
        </div>
      </header>
      <main className="MainContainer">
        <div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
