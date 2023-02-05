import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, View, StyleSheet, FlatList, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from './colors'
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const imageHeight = height > 700 ? 120 : 100;

const Squares = ({ title, data, code }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress ={() => {navigation.navigate('AlbumPage', {album: item, code:code})}}>
              <Image source={{ uri: item.cover }} style={styles.image} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={3}
        scrollEnabled={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    height: imageHeight,
    aspectRatio: 1,
    margin: 10
  },
  header: {
    paddingVertical: 16,
    paddingLeft: 15,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold',
  },
})

export default Squares