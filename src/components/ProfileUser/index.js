import React from  'react';
import './styles.css';
import Profile from '../../img/profile.jpg';
import GitHub from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import AvatarProfile from '../../objects/AvatarProfile';
import IconSocial from '../../objects/IconSocial';

const ProfileUser = () => (
    <dl className="profile-user">
        <dd className="avatar"><AvatarProfile src={Profile} alt="Avatar do Elton Costa" /></dd>
        <dt className="title">Dev Front-End Jr</dt>
        <dd className="description">Meu objetivo é encontrar uma oportunidade de emprego, e assim aprofundar e melhorar minhas habilidades em programação.</dd>
        <dd className="socials" >
            <IconSocial src={GitHub} alt="Logo do GitHub"/>
            <IconSocial src={Linkedin} alt="Logo do Linkedin"/>

        </dd>
    </dl>
);

export default ProfileUser;