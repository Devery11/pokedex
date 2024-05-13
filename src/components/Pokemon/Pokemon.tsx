import React, {memo, useCallback, useEffect} from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {fetchPokemonInfo} from '../../api/fetchPokemons.ts';
import {PokemonList} from '../../interfaces/PokemonList.ts';
import {Navigation} from '../../enums/Navigation.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PokemonProps = {
  pokemon: PokemonList;
  index: number;
};

export const Pokemon: React.FC<PokemonProps> = memo(({pokemon, index}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch<any>();

  const handlePokemonPress = useCallback(() => {
    if (pokemon !== null) {
      navigation.navigate(Navigation.PokemonDetails, {
        pokemonInfo: pokemon.pokemonInfo,
      });
    }
  }, [navigation, pokemon]);

  useEffect(() => {
    if (!pokemon.pokemonInfo) {
      dispatch(fetchPokemonInfo(pokemon.url, index));
    }
  }, []);

  if (!pokemon.pokemonInfo) {
    return <ActivityIndicator style={[style.pokemon, {height: 134}]} />;
  }

  return (
    <TouchableOpacity style={style.pokemon} onPress={handlePokemonPress}>
      <Image
        src={pokemon?.pokemonInfo?.sprites.other?.home.front_default ?? ''}
        style={style.pokemonImage}
      />
      <Text style={style.pokemonName}>
        {index + 1}. {pokemon.pokemonInfo?.name}
      </Text>
    </TouchableOpacity>
  );
});

const style = StyleSheet.create({
  pokemon: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  pokemonImage: {
    height: 108,
    width: 108,
    borderRadius: 8,
    marginRight: 24,
    backgroundColor: '#ADD8E6',
    borderWidth: 1,
  },
  pokemonName: {
    textTransform: 'capitalize',
    fontSize: 16,
  },
});
