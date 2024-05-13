import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Pokemon} from 'pokenode-ts';

export const PokemonDetails = () => {
  const route = useRoute();
  const {pokemonInfo} = route.params as {pokemonInfo: Pokemon};

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 24}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              src={pokemonInfo?.sprites.other?.home.front_default ?? ''}
              style={{
                height: 160,
                width: 160,
                borderRadius: 8,
                borderWidth: 1,
                backgroundColor: '#ADD8E6',
                marginRight: 16,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  fontSize: 20,
                }}>
                {pokemonInfo.name}
              </Text>
              <Text>Id: {pokemonInfo?.id}</Text>
              <Text>
                Types:{' '}
                {pokemonInfo?.types.map(type => (
                  <Text key={type.type.url}>{type.type.name}, </Text>
                ))}
              </Text>
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            <Text>Height: {pokemonInfo?.height}</Text>
            <Text>Weight: {pokemonInfo?.weight}</Text>
            <Text>Base exp: {pokemonInfo?.base_experience}</Text>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Stats:</Text>
            {pokemonInfo?.stats.map(stat => (
              <Text style={{fontSize: 16, lineHeight: 30}} key={stat.stat.url}>
                {stat.stat.name.toUpperCase() + ': ' + stat.base_stat}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
