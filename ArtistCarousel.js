import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import ArtistIcon from './ArtistIcon'
import colors from './colors';
const ArtistCarousel = ({ data, title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <FlatList
                data={data} // set the data prop to the recommendedAlbums state variable
                horizontal // enable horizontal scrolling
                showsHorizontalScrollIndicator={false} // hide the scroll indicator
                keyExtractor={item => item.name} // use the album name as the key
                renderItem={({ item }) => (
                    <ArtistIcon artist={item} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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


export default ArtistCarousel