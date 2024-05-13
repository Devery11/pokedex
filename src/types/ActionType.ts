import {NamedAPIResourceList, Pokemon} from 'pokenode-ts';
import {Action} from '../enums/Action.ts';

export type ActionType =
  | {
      type: Action.addPokemonInfoByName;
      payload: {pokemonInfoData: Pokemon; index: number};
    }
  | {type: Action.addPokemonsList; payload: NamedAPIResourceList}
  | {type: Action.setFilterQuery; payload: string}
  | {type: Action.setIsLoading; payload: boolean}
  | {type: Action.setNewPage; payload: number}
  | {type: Action.setNewErrorMessage; payload: string};
