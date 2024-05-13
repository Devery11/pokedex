import {
  addPokemonByNameFromServer,
  addPokemonsListFromServer,
  setIsLoading,
  setNewErrorMessage,
} from '../store/pokemonReducer.ts';
import {Action, Dispatch} from '@reduxjs/toolkit';
import {AppThunk} from '../types/AppThunk.ts';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemons =
  (page = 0, limit = 50): AppThunk =>
  async dispatch => {
    dispatch(setIsLoading(true));
    return fetch(API_URL + `?limit=${limit}&offset=${page * limit}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(json => {
        dispatch(addPokemonsListFromServer(json));
        dispatch(setIsLoading(false));
      })
      .catch(error => dispatch(setNewErrorMessage(error.message)));
  };

export const fetchPokemonInfo =
  (url: string, index: number): AppThunk =>
  async dispatch => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(pokemonInfo =>
        dispatch(addPokemonByNameFromServer(pokemonInfo, index))
      )
      .catch(error => dispatch(setNewErrorMessage(error.message)));
  };
