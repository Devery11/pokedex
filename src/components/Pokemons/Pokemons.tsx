import { Button, ScrollView, Text } from "react-native";
import {Pokemon} from '../Pokemon/Pokemon.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/State.ts';
import React, {useCallback, useEffect} from 'react';
import {fetchPokemons} from '../../api/fetchPokemons.ts';
import {setNewPage} from '../../store/pokemonReducer.ts';

export const Pokemons: React.FC = () => {
  const dispatch = useDispatch<any>();

  const pokemonsList = useSelector(
    (state: State) => state?.pokemonsFromServer?.results,
  );
  const query = useSelector((state: State) => state?.query);
  const currentPage = useSelector((state: State) => state?.currentPage);
  const isLoading = useSelector((state: State) => state?.isLoading);
  const errorMessage = useSelector((state: State) => state?.errorMessage);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const loadMore = useCallback(() => {
    const newPage = currentPage + 1;
    dispatch(fetchPokemons(newPage));
    dispatch(setNewPage(newPage));
  }, [currentPage]);

  return !errorMessage ? (
    <ScrollView>
      {pokemonsList
        ?.filter(pokemon =>
          pokemon.name.includes(query?.toLowerCase().trim() as string),
        )
        .map((pokemon, index) => (
          <Pokemon pokemon={pokemon} index={index} key={pokemon.name} />
        ))}
      {!isLoading && <Button title="LOAD MORE" onPress={loadMore} />}
    </ScrollView>
  ) : (
    <Text
      style={{
        fontSize: 24,
        margin: 'auto',
        backgroundColor: 'crimson',
        padding: 24,
      }}>
      {errorMessage}
    </Text>
  );
};
