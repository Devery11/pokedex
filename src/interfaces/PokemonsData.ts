import {NamedAPIResourceList} from 'pokenode-ts';
import {PokemonList} from './PokemonList.ts';

export interface PokemonsData extends NamedAPIResourceList {
  results: PokemonList[];
}
