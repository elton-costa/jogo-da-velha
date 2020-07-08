import React from 'react';
import EltonCosta from '../../img/logo-elton.svg';
import EltonCostaLight from '../../img/logo-light.svg';

const LogoElton = ({ light = false }) => (<img className="logo-elton" src={light ? EltonCostaLight : EltonCosta} alt="Logo do Elton Costa" />);

export default LogoElton;