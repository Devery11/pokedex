import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFilterQuery} from '../../store/pokemonReducer.ts';
import {useDebounce} from '../../hooks/useDebounce.tsx';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>('');

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    dispatch(setFilterQuery(debouncedQuery));
  }, [debouncedQuery]);

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Search"
      onChangeText={event => setQuery(event)}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    marginBottom: 24,
    marginHorizontal: 48,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
});
