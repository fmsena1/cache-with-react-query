import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useQuery } from 'react-query';
import { cacheData } from './store/actions';

async function fetchUserData(username, dispatch, cache) {
  try {
    if (username in cache) {
      console.log("cache")
      return cache[username];
    } 
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const userData = response.data;
      dispatch(cacheData(username, userData));
      return userData;
  } catch (error) {
    throw error;
  }
}

function UserProfile() {
  const { userIdentifier } = useParams();
  const dispatch = useDispatch();
  const cache = useSelector((state) => state.cache);

  console.log(cache);

  const { data, isLoading, isError } = useQuery(['user', userIdentifier], () => fetchUserData(userIdentifier, dispatch, cache));

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Ocorreu um erro ao buscar os dados do usuário.</div>;
  }

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Nome de Usuário: {data.login}</p>
      <p>Nome: {data.name}</p>
      <p>Seguidores: {data.followers}</p>
    </div>
  );
}

export default UserProfile;
