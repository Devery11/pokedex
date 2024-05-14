import {PokemonsData} from '../interfaces/PokemonsData.ts';

export type State = {
  pokemonsFromServer: PokemonsData;
  query: string;
  isLoading: boolean;
  errorMessage: string;
};
