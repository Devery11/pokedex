import {SafeAreaView, Text} from 'react-native';
import {SearchBar} from '../SearchBar/SearchBar.tsx';
import {Pokemons} from '../Pokemons/Pokemons.tsx';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'red',
          margin: 'auto',
          fontSize: 24,
        }}>
        Pokedex
      </Text>
      <SearchBar />
      <Pokemons />
    </SafeAreaView>
  );
};
