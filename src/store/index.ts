import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {pokemonReducer} from './pokemonReducer.ts';
import {thunk} from 'redux-thunk';

export const store = createStore(pokemonReducer, applyMiddleware(thunk));
