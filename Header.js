import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>musaic</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    paddingVertical: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
