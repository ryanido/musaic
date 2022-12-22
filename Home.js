import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text, ScrollView } from 'react-native';
import AlbumIcon from './AlbumIcon';
import albums from './albums.json'; // import the JSON data
import songs from './songs.json';
import artists from './artists.json'
import Carousel from './Carousel';
import colors from './colors';
import Header from './Header';
import ArtistCarousel from './ArtistCarousel';

const Home = ({navigation, route}) => {
    const [recommendedAlbums, setRecommendedAlbums] = useState([]); // create a state variable to store the imported data

    //   useEffect(() => {
    //     setRecommendedAlbums(albums); // set the state variable to the imported data
    //   }, []);
    console.log(route.params)
    return (
        <ScrollView style={styles.scrollCon} contentContainerStyle={styles.container}>
            <Carousel title={"Recommended Albums"} data={albums} />
            <Carousel title={"Recommended Songs"} data={songs} />
            <ArtistCarousel title={"Recommended Artists"} data={artists} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollCon: {
        backgroundColor: colors.darkGray,
    },
    container: {
        paddingBottom: 20
    },
    header: {
        paddingVertical: 16,
        paddingLeft: 15
    },
    headerText: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
    },
})

export default Home;
