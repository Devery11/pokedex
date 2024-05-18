import {
  addPokemonByNameFromServer,
  addPokemonsListFromServer,
  setIsLoading,
  setNewErrorMessage,
} from '../store/pokemonReducer.ts';
import {AppThunk} from '../types/AppThunk.ts';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemons =
  (limit = 151): AppThunk =>
  async dispatch => {
    dispatch(setIsLoading(true));
    return fetch(API_URL + `?limit=${limit}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(pokemons => {
        dispatch(addPokemonsListFromServer(pokemons));
      })
      .catch(error => dispatch(setNewErrorMessage(error.message)))
      .finally(() => dispatch(setIsLoading(false)));
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
        dispatch(addPokemonByNameFromServer(pokemonInfo, index)),
      )
      .catch(error => dispatch(setNewErrorMessage(error.message)));
  };
