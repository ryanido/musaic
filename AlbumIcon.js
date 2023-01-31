import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from './colors';

const AlbumIcon = ({ album,size,code }) => {
    const navigation = useNavigation();
    const styles = sheet(size)
    return (
        <TouchableOpacity style={styles.container} onPress ={() => {
            navigation.navigate('AlbumPage',{album:album,code:code})
        }}>
            <Image source={{ uri: album.cover }} style={styles.image} />
            <View style = {styles.desc}>
                <Text style={styles.name}>{album.name}</Text>
                <Text style={styles.artist}>{album.artist}</Text>
            </View>
        </TouchableOpacity>
    );
};

const sheet = (size) => StyleSheet.create({
    desc: {
        textAlign:'left',
        width:'100%'
    },
    container: {
        marginHorizontal: 12,
        alignItems: 'center',
        width: size*125,
        padding:10,
        borderRadius:5,
        aspectRatio:1/1.5,
        overflow:'hidden',
        backgroundColor:colors.lighterDarkGray
    },
    image: {
        height: size*100,
        aspectRatio: 1,
    
    },
    name: {
        color: colors.white,
        fontSize: size*12,
        fontWeight: 'bold',
        marginTop: 8,
        height: size*40,
        overflow:'hidden'

    },
    artist: {
        fontSize: size*12,
        color: colors.lightGray,
        marginTop: 4,
    },
});

export default AlbumIcon;
