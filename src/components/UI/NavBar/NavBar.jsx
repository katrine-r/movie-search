import React from 'react';
import classes from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import LogInIcon from '../../../icons/LogInIcon';
import LogoIcon from '../../../icons/LogoIcon';
import RegistrationIcon from '../../../icons/RegistrationIcon';
import SearchIcon from '../../../icons/SearchIcon';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <header className={classes.Header}>
                <div className={classes.Logo}>
                    <Link to="/">
                        <span><LogoIcon /></span>
                        <span><h3>Movie Search</h3></span>
                    </Link>
                </div>
                <nav className={classes.Navigation}>
                    <ul>
                        <li><NavLink to="/">Фильмы</NavLink></li>
                        <li><NavLink to="/">Сериалы</NavLink></li>
                        <li><NavLink to="/">Люди</NavLink></li>
                    </ul>
                </nav>
                <div className={classes.SearchContent}>
                    <Link to="/"><SearchIcon /></Link>
                </div>
                <div className={classes.LogInWrapper}>
                    <div className={classes.LogIn}>
                        <Link to="/">
                            <span className={classes.LogInContent}>
                                <span><LogInIcon /></span>
                                <span>&nbsp;Вход</span> 
                            </span>
                        </Link>
                    </div>
                    <div className={classes.Registration}>
                        <Link to="/">
                            <span className={classes.RegistrationContent}>
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