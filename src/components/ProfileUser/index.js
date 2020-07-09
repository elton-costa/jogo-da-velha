import React from  'react';
import Profile from '../../img/profile.jpg';
import AvatarProfile from '../../objects/AvatarProfile';

const ProfileUser = () => (
    <dl>
        <dd><AvatarProfile src={Profile} alt="Avatar do Elton Costa" /></dd>
        <dt>Desenvolvedor Front-End Jr.</dt>
        <dd>Meu objetivo é encontrar uma oportunidade de emprego, e assim aprofundar e melhorar minhas habilidades em programação.</dd>
    </dl>
);

export default ProfileUser;