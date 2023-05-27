import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import AlbumIcon from './AlbumIcon'
import colors from '../../colors';

const Carousel = ({data,title,code}) => {
    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <FlatList
                data={data} // set the data prop to the recommendedAlbums state variable
                horizontal // enable horizontal scrolling
                showsHorizontalScrollIndicator={false} // hide the scroll indicator
                keyExtractor={item => item.id} // use the album name as the key
                renderItem={({ item }) => (
                <AlbumIcon album={item} size={1.3} code={code}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 16,
        paddingLeft:15,
        alignItems:'center'
    },
    headerText: {
        fontSize: 25,
        color: colors.white,
        fontWeight: 'bold',
    },
})


export default Carousel