import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from './colors';
import spotifylogo from './assets/spotify.png'

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function LoginPage({ navigation }) {
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: '56c3551c92fb40c48cc80cf569f627c9',
            scopes: [
                'user-read-email',
                'playlist-modify-public',
                'user-top-read',
                'user-library-read',
                'user-read-recently-played'
            ],
            // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            redirectUri: makeRedirectUri({
                scheme: 'exp://192.168.1.17:19000'
            }),
        },
        discovery
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            navigation.navigate('Home', { code: code })
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} onPress={() => {
                promptAsync();
            }}>
                <Image  style = {styles.spotifylogo} source = {spotifylogo}/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        height: 70,
        width: '80%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop:'25%'
    },
    spotifylogo:{
        height:60,
        aspectRatio:2362/708
    },
    container: {
        backgroundColor: colors.darkGray,
        height: '100%',
        // justifyContent: 'center',
        alignItems: 'center'
    },
})