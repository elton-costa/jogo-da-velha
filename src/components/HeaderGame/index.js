import React from 'react';
import './styles.css';
import LogoElton from '../../objects/LogoElton';
import AboutLink from  '../../objects/AboutLink';
import MenuGame from '../../objects/MenuGame';

const HeaderGame = ({ onClick }) => (
    <header className="header-game">
        <LogoElton />
        <AboutLink onClick={onClick}/>
        <MenuGame onClick={onClick}/>
    </header>
);

export default HeaderGame;   