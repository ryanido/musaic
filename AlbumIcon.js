import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from './colors';

const AlbumIcon = ({ album }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: album.cover }} style={styles.image} />
            <View style = {styles.desc}>
                <Text style={styles.name}>{album.name}</Text>
                <Text style={styles.artist}>{album.artist}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    desc: {
        textAlign:'left',
        width:'100%'
    },
    container: {
        marginHorizontal: 12,
        alignItems: 'center',
        width: 125,
        padding:10,
        borderRadius:5,
        aspectRatio:1/1.5,
        overflow:'hidden',
        backgroundColor:colors.lighterDarkGray
    },
    image: {
        height: 100,
        aspectRatio: 1,
        borderRadius: 8,
    },
    name: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
        height: 40,
        overflow:'hidden'

    },
    artist: {
        fontSize: 12,
        color: colors.lightGray,
        marginTop: 4,
    },
});

export default AlbumIcon;
