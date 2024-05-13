import { NamedAPIResourceList, Pokemon } from "pokenode-ts";
import {ActionType} from '../enums/ActionType.ts';

export type Action =
  | {
      type: ActionType.addPokemonInfoByName;
      payload: {pokemonInfoData: Pokemon; index: number};
    }
  | {type: ActionType.addPokemonsList; payload: NamedAPIResourceList}
  | {type: ActionType.setFilterQuery; payload: string}
  | {type: ActionType.setIsLoading; payload: boolean}
  | {type: ActionType.setNewPage; payload: number}
  | {type: ActionType.setNewErrorMessage; payload: string};
