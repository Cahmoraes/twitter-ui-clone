import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  LocationIcon,
  ProfileData,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Caique Moraes</h1>
        <h2>@caique_moraes</h2>
        <p>
          Developer at Compass UOL <a href="/">compass UOL</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 23 de dezembro de 1993
          </li>
        </ul>
        <Followage>
          <span>Seguindo <strong>94</strong></span>
          <span><strong>672 </strong>seguidores</span>
        </Followage>
      </ProfileData>

      <Feed />

    </Container>
  );
}

export default ProfilePage;