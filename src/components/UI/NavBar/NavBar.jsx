import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogInIcon from '../../../icons/LogInIcon';
import LogoIcon from '../../../icons/LogoIcon';
import RegistrationIcon from '../../../icons/RegistrationIcon';
import SearchIcon from '../../../icons/SearchIcon';
import './NavBar.scss';

const NavBar = () => {
    return (
        <div className="NavBar">
            <header className="Header">
                <div className="Logo">
                    <Link href="#">
                        <span><LogoIcon /></span>
                        <span><h3>Movie Search</h3></span>
                    </Link>
                </div>
                <nav className="Navigation">
                    <ul>
                        <li><NavLink href="#">Фильмы</NavLink></li>
                        <li><NavLink href="#">Сериалы</NavLink></li>
                        <li><NavLink href="#">Люди</NavLink></li>
                    </ul>
                </nav>
                <div className="SearchContent">
                    <Link href="#"><SearchIcon /></Link>
                </div>
                <div className="LogInWrapper">
                    <div className="LogIn">
                        <Link href="#">
                            <span className="LogInContent">
                                <span><LogInIcon /></span>
                                <span>&nbsp;Вход</span> 
                            </span>
                        </Link>
                    </div>
                    <div className="Registration">
                        <Link href="#">
                            <span className="RegistrationContent">
                                <span><RegistrationIcon /></span>
                                <span>&nbsp;Регистрация</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </header>   
        </div>
    )
}

export default NavBar