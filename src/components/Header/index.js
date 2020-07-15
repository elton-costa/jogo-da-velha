import React from 'react';
import './styles.css';
import LogoElton from '../../objects/LogoElton';
import AboutLink from  '../../objects/AboutLink';
import Menu from '../../objects/Menu';

const Header = ({ onClick }) => (
    <header className="header">
        <LogoElton />
        <AboutLink onClick={onClick}/>
        <Menu onClick={onClick}/>
    </header>
);

export default Header;   