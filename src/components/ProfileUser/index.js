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
        <dt className="title">Front-End Júnior</dt>
        <dd className="description">Estudando para aprofundar e melhorar as minhas habilidades de programação. E assim, deixar cada vez mais, meu código semanticamente correto e de fácil manutenção.</dd>
        <dd className="socials" >
            <IconSocial action="https://github.com/elton87" src={GitHub} alt="Logo do GitHub"/>
            <IconSocial action="https://www.linkedin.com/in/elton-costa-a886b51b2" src={Linkedin} alt="Logo do Linkedin"/>

        </dd>
    </dl>
);

export default ProfileUser;
