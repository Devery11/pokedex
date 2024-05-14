import {pokemonReducer} from './pokemonReducer';
import {Action} from '../enums/Action.ts';

describe('pokemonReducer', () => {
  it('should add pokemons to state', () => {
    const initialState = {
      pokemonsFromServer: {
        results: [],
      },
      query: '',
      isLoading: true,
      errorMessage: '',
    };

    const action = {
      type: Action.addPokemonsList,
      payload: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    const result = pokemonReducer(initialState, action);

    const expectedData = {
      query: '',
      isLoading: true,
      errorMessage: '',
      pokemonsFromServer: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    expect(result).toEqual(expectedData);
  });

  it('should add pokemonInfo to pokemonsFromServer in State', () => {
    const initialState = {
      query: '',
      isLoading: true,
      errorMessage: '',
      pokemonsFromServer: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    const action = {
      type: Action.addPokemonInfoByName,
      payload: {
        pokemonInfoData: {
          name: 'Charmander',
        },
        index: 0,
      },
    };

    const result = pokemonReducer(initialState, action);

    const expectedData = {
      query: '',
      isLoading: true,
      errorMessage: '',
      pokemonsFromServer: {
        results: [
          {
            url: '',
            name: 'Charmander',
            pokemonInfo: {
              name: 'Charmander',
            },
          },
        ],
        count: 2,
        next: null,
        previous: null,
      },
    };

    expect(result).toEqual(expectedData);
  });

  it('should set query to state', () => {
    const initialState = {
      query: '',
      isLoading: true,
      errorMessage: '',
      pokemonsFromServer: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    const action = {
      type: Action.setFilterQuery,
      payload: 'qwerty',
    };

    const result = pokemonReducer(initialState, action);

    const expectedData = {
      query: 'qwerty',
      isLoading: true,
      errorMessage: '',
      pokemonsFromServer: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    expect(result).toEqual(expectedData);
  });

  it('should set isLoading to state', () => {
    const initialState = {
      query: '',
      isLoading: true,
      errorMessage: '',
      pokemonsFromServer: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    const action = {
      type: Action.setIsLoading,
      payload: false,
    };

    const result = pokemonReducer(initialState, action);

    const expectedData = {
      query: '',
      isLoading: false,
      errorMessage: '',
      pokemonsFromServer: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    expect(result).toEqual(expectedData);
  });

  it('should set newError to state', () => {
    const initialState = {
      query: '',
      isLoading: true,
      errorMessage: '',
      pokemonsFromServer: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    const action = {
      type: Action.setNewErrorMessage,
      payload: 'some error',
    };

    const result = pokemonReducer(initialState, action);

    const expectedData = {
      query: '',
      isLoading: true,
      errorMessage: 'some error',
      pokemonsFromServer: {
        results: [{url: '', name: 'Charmander'}],
        count: 2,
        next: null,
        previous: null,
      },
    };

    expect(result).toEqual(expectedData);
  });
});
