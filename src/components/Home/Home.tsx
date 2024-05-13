import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {SearchBar} from '../SearchBar/SearchBar.tsx';
import {Pokemons} from '../Pokemons/Pokemons.tsx';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <SearchBar />
      <Pokemons />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontWeight: 'bold',
    color: 'red',
    margin: 'auto',
    fontSize: 24,
    marginBottom: 16,
  },
});
