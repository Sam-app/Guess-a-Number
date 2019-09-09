import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'

export default function App() {
  return (
    <View style={StyleSheet.screen}>
    <Header title='Guess a Number' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  }
})

