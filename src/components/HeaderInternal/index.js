import React from 'react';
import './styles.css';

import LogoElton from '../../objects/LogoElton';
import AboutLink from '../../objects/AboutLink';
import IconClose from '../../objects/IconClose';

const HeaderInternal = () => (
    <header className="header-internal">
        <LogoElton light />
        <AboutLink className="-light" />
        <IconClose />
    </header>
);

export default HeaderInternal;