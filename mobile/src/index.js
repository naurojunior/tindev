import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Routes from './routes.js';

export default function App() {
  return (
    <Routes />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#7159c1', 
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20
  }
})