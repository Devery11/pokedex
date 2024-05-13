/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Home} from './components/Home/Home.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {PokemonDetails} from './components/PokemonDetails/PokemonDetails.tsx';
import {store} from './store';
import {Provider} from 'react-redux';
import {Navigation} from './enums/Navigation.ts';

const Stack = createNativeStackNavigator();

const App: Element = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Navigation.Home} component={Home} />
          <Stack.Screen
            name={Navigation.PokemonDetails}
            component={PokemonDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
