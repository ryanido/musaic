import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../../colors';
import spotifylogo from '../../assets/spotify.png'
import {SERVER_URL,REDIRECT_URI,CLIENT_ID,CLIENT_SECRET} from "@env"


WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};


export default function LoginPage({ navigation }) {
    console.log(REDIRECT_URI)
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: CLIENT_ID,
            scopes: [
                'user-read-email',
                'playlist-read-private',
                'streaming',
                'user-top-read',
                'user-library-read',
                'user-read-recently-played'
            ],
            // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
            usePKCE: false,
            redirectUri: makeRedirectUri({
                scheme: REDIRECT_URI
            }),
        },
        discovery
    );

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            fetch(discovery.tokenEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(
                    REDIRECT_URI
                )}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
            })
                .then((response) => response.json())
                .then((data) => {
                    // The access token is contained in the `data` object
                    console.log(data)
                    const { access_token } = data;
                    navigation.navigate('TabNav', { code: access_token });
                })
                .catch((error) => console.log(error) )
        }
    }, [response]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginButton} onPress={() => {
                promptAsync();
            }}>
                <Image style={styles.spotifylogo} source={spotifylogo} />
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
        marginTop: '25%'
    },
    spotifylogo: {
        height: 60,
        aspectRatio: 2362 / 708
    },
    container: {
        backgroundColor: colors.darkGray,
        height: '100%',
        // justifyContent: 'center',
        alignItems: 'center'
    },
})