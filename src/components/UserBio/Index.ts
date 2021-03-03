import React from 'react';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/ducks/User/types';

const UserBio = () => {

  const { name, username, userPicture } = useSelector((state: UserState) => state.user)
  return (
    <div className="user-info">
      <img alt="Perfil" src={userPicture}/>
      <div className="user-bio">
        <strong>{name}</strong>
        <span>{username}</span>
      </div>
    </div>
  );
}

export default UserBio;