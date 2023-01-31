import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import colors from './colors';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>musaic</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
