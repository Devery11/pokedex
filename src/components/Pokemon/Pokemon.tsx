import React, {memo, useCallback, useEffect} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {fetchPokemonInfo} from '../../api/fetchPokemons.ts';
import {PokemonList} from '../../interfaces/PokemonList.ts';
import { Navigation } from "../../enums/Navigation.ts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PokemonProps = {
  pokemon: PokemonList;
  index: number;
};

export const Pokemon: React.FC<PokemonProps> = memo(({pokemon, index}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (!pokemon.pokemonInfo) {
      dispatch(fetchPokemonInfo(pokemon.url, index));
    }
  }, []);

  const handlePokemonPress = useCallback(() => {
    if (pokemon !== null) {
      navigation.navigate(Navigation.PokemonDetails, {
        pokemonInfo: pokemon.pokemonInfo,
      });
    }
  }, [navigation, pokemon]);

  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        margin: 16,
        alignItems: 'center',
      }}
      onPress={handlePokemonPress}>
      <Image
        src={pokemon?.pokemonInfo?.sprites.other?.home.front_default ?? ''}
        style={{
          height: 108,
          width: 108,
          borderRadius: 8,
          marginRight: 24,
          backgroundColor: '#ADD8E6',
          borderWidth: 1,
        }}
      />
      <Text style={{textTransform: 'capitalize', fontSize: 16}}>
        {index + 1}. {pokemon.pokemonInfo?.name}
      </Text>
    </TouchableOpacity>
  );
});
