import React from 'react';
import './styles.css';

import LogoElton from '../../objects/LogoElton';
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';

const HeaderInternal = ({ onClick }) => (
    <header className="header-internal">
        <LogoElton light />
        <AboutLink className="-light" onClick={onClick} />
        <IconClose onClick={onClick}/>
    </header>
);

export default HeaderInternal;