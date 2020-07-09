import React from  'react';
import './styles.css';
import Profile from '../../img/profile.jpg';
import AvatarProfile from '../../objects/AvatarProfile';

const ProfileUser = () => (
    <dl className="profile-user">
        <dd className="avatar"><AvatarProfile src={Profile} alt="Avatar do Elton Costa" /></dd>
        <dt className="title">Desenvolvedor Front-End Jr.</dt>
        <dd className="description">Meu objetivo é encontrar uma oportunidade de emprego, e assim aprofundar e melhorar minhas habilidades em programação.</dd>
    </dl>
);

export default ProfileUser;