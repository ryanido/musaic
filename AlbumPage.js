import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Linking, ScrollView, ActivityIndicator } from 'react-native';
import colors from './colors';
import { Ionicons } from 'react-native-vector-icons'
import Squares from './Squares';
import axios from 'axios';
import { SERVER_URL } from '@env'
import songs from './songs.json'

function AlbumPage({ navigation, route }) {
  console.log(route.params);
  const { album, code } = route.params;
  const [recommendations, setRecommendations] = useState({ "tracks": songs })
  const [loading, setLoading] = useState(true)
  const getSongRecommendations = () => {
    console.log(album)
    axios.get(`${SERVER_URL}song-recommendations`, {
      params: {
        code: code,
        song: album.id,
        artist: album.artist_id
      }
    }).then(response => {
      setRecommendations(response.data)
      setLoading(false)
      console.log(recommendations)
    }).catch(error => {
      alert(error)
    });
  }
  useEffect(() => {
    getSongRecommendations()
    console.log(recommendations.tracks)
  }, []);

  return (
    <>
      {loading ? (
        <View style={[styles.container,{flex:1,justifyContent:'center'}]}>
          <ActivityIndicator size="large" color={colors.lightGray} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container} style={{backgroundColor:colors.lighterDarkGray}}>
          <TouchableOpacity style={styles.arrow} onPress={() => navigation.goBack()}>
            <Ionicons name='ios-arrow-back-outline' size={32} color={colors.white} />
          </TouchableOpacity>
          <Image style={styles.cover} source={{ uri: album.cover }} />
          <Text style={styles.albumName}>{album.name}</Text>
          <Text style={styles.artistName}>{album.artist}</Text>
          <TouchableOpacity style={styles.playButton} onPress={() => Linking.openURL(album.uri)}>
            <Ionicons name='play' size={25} color={colors.black} />
            <View style={styles.playButtonB}>
              <Text style={styles.playButtonText}>Play</Text>
            </View>
          </TouchableOpacity>
          <Squares title={"You Might Also Like"} data={recommendations.tracks} code={code} />
        </ScrollView>
      )}
    </>)
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.lighterDarkGray,
    
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
    width:300,
    
  },
  artistName: {
    color: colors.lightGray,
    fontSize: 16,
  },
  playButton: {
    marginTop: 10,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.green,
    width: 300,
    borderRadius: 10
  },
  playButtonB: {
    flex: 1,
    alignItems: 'center',
  },
  playButtonText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.black,
    marginRight: 30
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