import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../colors';

const ArtistIcon = ({ artist }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: artist.cover }} style={styles.image} />
            <View style = {styles.desc}>
                <Text style={styles.name}>{artist.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    desc: {

    },
    container: {
        marginHorizontal: 16,
        alignItems: 'center',
        width: 125,
        aspectRatio:1/1.25,
        overflow:'hidden',
        borderRadius:5,
        padding:10,
        backgroundColor:colors.lighterDarkGray
    },
    image: {
        height: 100,
        aspectRatio: 1,
        borderRadius: 50,
    },
    name: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,

    },
});

export default ArtistIcon;
