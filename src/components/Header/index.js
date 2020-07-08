import React from 'react';
import './styles.css';
import LogoElton from '../../objects/LogoElton';
import AboutLink from  '../../objects/AboutLink';
import Menu from '../../objects/Menu';

const Header = () => (
    <header className="header">
        <LogoElton />
        <AboutLink />
        <Menu />
    </header>
);

export default Header;   