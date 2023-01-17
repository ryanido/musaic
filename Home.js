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
import axios from 'axios';
import { SERVER_URL } from '@env'

const Home = ({ navigation, route }) => {
    const [recommendations, setRecommendations] = useState({ "albums": albums, "tracks": songs })
    const [recentlyPlayed, setRecentlyPlayed] = useState(songs)
    const [loading, setLoading] = useState(true)
    const { code } = route.params;

    useEffect(() => {
        getRecommendations();
        getRecentlyPlayed();
      }, []);

    const getRecommendations = () => {
        setLoading(true)
        axios.get(`${SERVER_URL}recommendations`, {
            params: {
                code: code
            }
        }).then(response => {
            setRecommendations(response.data);
            setLoading(false)
        }).catch(error => {
            console.log(error)
        });
    }

    const getRecentlyPlayed = () => {
        setLoading(true)
        axios.get(`${SERVER_URL}recently-played`, {
            params: {
                code: code
            }
        }).then(response => {
            setRecentlyPlayed(response.data);
            setLoading(false)
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <ScrollView style={styles.scrollCon} contentContainerStyle={styles.container}>
            <Carousel title= {"Recently Played"} data={recentlyPlayed} />
            <Carousel title={"Recommended Albums"} data={recommendations.albums} />
            <Carousel title={"Recommended Songs"} data={recommendations.tracks} />
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
