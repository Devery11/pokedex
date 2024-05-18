import {NamedAPIResource, Pokemon} from 'pokenode-ts';

export interface PokemonList extends NamedAPIResource {
  pokemonInfo?: Pokemon;
  key: number;
}
