import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import {Pokemon} from '../Pokemon/Pokemon.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/State.ts';
import React, {useEffect, useMemo} from 'react';
import {fetchPokemons} from '../../api/fetchPokemons.ts';

export const Pokemons: React.FC = () => {
  const dispatch = useDispatch<any>();

  const pokemonsList = useSelector(
    (state: State) => state?.pokemonsFromServer?.results,
  );
  const query = useSelector((state: State) => state?.query);
  const isLoading = useSelector((state: State) => state?.isLoading);
  const errorMessage = useSelector((state: State) => state?.errorMessage);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const filteredPokemonList = useMemo(
    () =>
      pokemonsList?.filter(pokemon =>
        pokemon.name.includes(query?.toLowerCase().trim() as string),
      ),
    [pokemonsList, query],
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#f00" />;
  }

  return !errorMessage ? (
    <FlatList
      style={style.container}
      data={filteredPokemonList}
      renderItem={pokemon => (
        <Pokemon pokemon={pokemon.item} index={pokemon.item.key} />
      )}
      keyExtractor={item => String(item.key)}
    />
  ) : (
    <Text style={style.errorMessage}>{errorMessage}</Text>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  errorMessage: {
    fontSize: 24,
    margin: 'auto',
    backgroundColor: 'crimson',
    padding: 24,
  },
});
