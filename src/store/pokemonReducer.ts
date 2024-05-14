import {ActionType} from '../types/ActionType.ts';
import {Action} from '../enums/Action.ts';
import {NamedAPIResourceList} from 'pokenode-ts';
import {State} from '../types/State.ts';
import {PokemonList} from '../interfaces/PokemonList.ts';

const defaultState = {
  pokemonsFromServer: {
    results: [] as PokemonList[],
  },
  query: '',
  isLoading: true,
  errorMessage: '',
} as State;

export const pokemonReducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case Action.addPokemonsList:
      return {
        ...state,
        pokemonsFromServer: {
          ...action.payload,
          results: [
            ...state?.pokemonsFromServer?.results,
            ...action.payload.results,
          ],
        },
      };
    case Action.addPokemonInfoByName:
      const newPokemonsFromServer = [...state.pokemonsFromServer.results];
      newPokemonsFromServer[action.payload.index] = {
        ...newPokemonsFromServer[action.payload.index],
        pokemonInfo: action.payload.pokemonInfoData,
      };
      return {
        ...state,
        pokemonsFromServer: {
          ...state.pokemonsFromServer,
          results: newPokemonsFromServer,
        },
      };
    case Action.setFilterQuery:
      return {
        ...state,
        query: action.payload,
      };
    case Action.setIsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Action.setNewErrorMessage:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export const addPokemonsListFromServer = (payload: NamedAPIResourceList) => ({
  type: Action.addPokemonsList,
  payload,
});

export const addPokemonByNameFromServer = (
  data: NamedAPIResourceList,
  index: number,
) => ({
  type: Action.addPokemonInfoByName,
  payload: {
    pokemonInfoData: data,
    index: index,
  },
});

export const setFilterQuery = (payload: string) => ({
  type: Action.setFilterQuery,
  payload,
});

export const setIsLoading = (payload: boolean) => ({
  type: Action.setIsLoading,
  payload,
});

export const setNewErrorMessage = (payload: string) => ({
  type: Action.setNewErrorMessage,
  payload,
});
