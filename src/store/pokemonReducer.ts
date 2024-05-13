import {Action} from '../types/Action.ts';
import {ActionType} from '../enums/ActionType.ts';
import {NamedAPIResourceList} from 'pokenode-ts';
import {State} from '../types/State.ts';
import { PokemonList } from "../interfaces/PokemonList.ts";

const defaultState = {
  pokemonsFromServer: {
    results: [] as PokemonList[],
  },
  query: '',
  isLoading: true,
  currentPage: 0,
  errorMessage: '',
} as State;

export const pokemonReducer = (state = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.addPokemonsList:
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
    case ActionType.addPokemonInfoByName:
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
    case ActionType.setFilterQuery:
      return {
        ...state,
        query: action.payload,
      };
    case ActionType.setIsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ActionType.setNewPage:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ActionType.setNewErrorMessage:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export const addPokemonsListFromServer = (payload: NamedAPIResourceList) => ({
  type: ActionType.addPokemonsList,
  payload,
});

export const addPokemonByNameFromServer = (
  data: NamedAPIResourceList,
  index: number,
) => ({
  type: ActionType.addPokemonInfoByName,
  payload: {
    pokemonInfoData: data,
    index: index,
  },
});

export const setFilterQuery = (payload: string) => ({
  type: ActionType.setFilterQuery,
  payload,
});

export const setIsLoading = (payload: boolean) => ({
  type: ActionType.setIsLoading,
  payload,
});

export const setNewPage = (payload: number) => ({
  type: ActionType.setNewPage,
  payload,
});

export const setNewErrorMessage = (payload: string) => ({
  type: ActionType.setNewErrorMessage,
  payload,
});
