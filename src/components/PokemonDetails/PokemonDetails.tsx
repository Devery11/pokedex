import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Pokemon} from 'pokenode-ts';

export const PokemonDetails = () => {
  const route = useRoute();
  const {pokemonInfo} = route.params as {pokemonInfo: Pokemon};

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.basicInfo}>
            <Image
              src={pokemonInfo?.sprites.other?.home.front_default ?? ''}
              style={styles.pokemonImage}
            />
            <View>
              <Text style={[styles.pokemonTitle, styles.statName]}>
                {pokemonInfo.name}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.statName}>id: </Text> {pokemonInfo?.id}
              </Text>
              <Text style={styles.text}>
                <Text style={styles.statName}>types: </Text>
                {pokemonInfo?.types.map(type => (
                  <Text key={type.type.url}>{type.type.name}, </Text>
                ))}
              </Text>
            </View>
          </View>
          <View style={styles.basicMetrics}>
            <Text style={styles.text}>
              <Text style={styles.statName}>height: </Text>
              {pokemonInfo?.height}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.statName}>weight: </Text>
              {pokemonInfo?.weight}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.statName}>base exp: </Text>
              {pokemonInfo?.base_experience}
            </Text>
          </View>
          <View>
            <Text style={[styles.pokemonTitle, styles.statName]}>stats:</Text>
            {pokemonInfo?.stats.map(stat => (
              <Text style={styles.text} key={stat.stat.url}>
                {stat.stat.name.toUpperCase() + ': ' + stat.base_stat}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  pokemonImage: {
    height: 160,
    width: 160,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#ADD8E6',
    marginRight: 16,
  },
  statName: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  text: {
    lineHeight: 30,
    fontSize: 16,
  },
  pokemonTitle: {
    fontSize: 24,
  },
  basicMetrics: {
    marginVertical: 20,
  },
  basicInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
