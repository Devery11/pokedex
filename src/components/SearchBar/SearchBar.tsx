import React from 'react';
import {TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFilterQuery} from '../../store/pokemonReducer.ts';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <TextInput
      style={{
        height: 40,
        marginBottom: 12,
        marginHorizontal: 48,
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
      }}
      placeholder="Search"
      onChangeText={event => dispatch(setFilterQuery(event))}
    />
  );
};
