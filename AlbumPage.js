import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet,Linking } from 'react-native';
import colors from './colors';
import { Ionicons } from 'react-native-vector-icons'

function AlbumPage({ navigation,route }) {
  const { album } = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
        <Ionicons name='ios-arrow-back-outline' size={32} color={colors.white} />
      </TouchableOpacity>
      <Image style={styles.cover} source={{ uri: album.cover }} />
      <Text style={styles.albumName}>{album.name}</Text>
      <Text style={styles.artistName}>{album.artist}</Text>
      <TouchableOpacity style={styles.playButton} onPress={() => Linking.openURL(album.uri)}>
        <Ionicons name='play' size = {25} color={colors.black}/>
        <View style={styles.playButtonB}>
          <Text style={styles.playButtonText}>Play</Text>
        </View>
      </TouchableOpacity>
      <Text style= {styles.albumName}>You Might Also Like</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lighterDarkGray
  },
  cover: {
    marginTop: 30,
    width: 250,
    aspectRatio: 1,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // zIndex:999
  },
  albumName: {
    marginTop: 20,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  artistName: {
    color: colors.lightGray,
    fontSize: 16,
  },
  playButton: {
    marginTop:10,
    flexDirection:'row',
    padding:10,
    alignItems: 'center',
    backgroundColor: colors.green,
    width:300,
    borderRadius:10
  },
  playButtonB: {
    flex:1,
    alignItems:'center',
  },
  playButtonText: {
    fontWeight: 'bold',
    fontSize:25,
    color:colors.black,
    marginRight:30
  },
  arrow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 5
  }
});

export default AlbumPage;