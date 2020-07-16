import React from 'react';
import './styles.css';
import LogoElton from '../../objects/LogoElton';
import AboutLink from  '../../objects/AboutLink';
import MenuGame from '../../objects/MenuGame';

const Header = ({ onClick }) => (
    <header className="header">
        <LogoElton />
        <AboutLink onClick={onClick}/>
        <MenuGame onClick={onClick}/>
    </header>
);

export default Header;   