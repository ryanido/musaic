import { StyleSheet, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import Carousel from '../features/songs/Carousel';
import colors from '../colors';
import { RefreshControl } from 'react-native-gesture-handler';
import {Ionicons} from 'react-native-vector-icons'
import Squares from '../features/songs/Squares';
import { useGetRecentlyPlayedQuery, useGetRecommendationsQuery } from '../features/api/apiSlice';

const Home = ({ navigation, code }) => {
    // const [recommendations, setRecommendations] = useState({})
    // const [recentlyPlayed, setRecentlyPlayed] = useState({})
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     refresh();
    // }, []);

    // const refresh = () => {
    //     setLoading(true)
    //     Promise.all([getRecommendations(),getRecentlyPlayed()]).then(
    //         setLoading(false)
    //     )
    // }
    // const getRecommendations = () => {
    //     return axios.get(`${SERVER_URL}recommendations`, {
    //         params: {
    //             code: code
    //         }
    //     }).then(response => {
    //         setRecommendations(response.data);
    //     }).catch(error => {
    //         console.log(error)
    //     });
    // }

   

    // const getRecentlyPlayed = () => {
    //     return axios.get(`${SERVER_URL}recently-played`, {
    //         params: {
    //             code: code
    //         }
    //     }).then(response => {
    //         setRecentlyPlayed(response.data);
    //     }).catch(error => {
    //         console.log(error)
    //     });
    // }

    const { data: recommendations, isLoading: recommendationsLoading } = useGetRecommendationsQuery(code)
  const { data: recentlyPlayed, isLoading: recentlyPlayedLoading } = useGetRecentlyPlayedQuery(code)



    return (
        <>
            {loading ? (
                <ActivityIndicator size="large" color={colors.lightGray}/>
            ) : (
                <ScrollView style={styles.scrollCon}
                    contentContainerStyle={styles.container}
                    refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} tintColor={colors.green} />}>
                    <TouchableOpacity style={styles.welcomeContainer}>
                        <Ionicons name="ios-musical-notes" size={40} color={colors.white} style={styles.icon}/>
                        <Text style={styles.welcomeText}>ryanido</Text>
                    </TouchableOpacity>
                    <Carousel title={"Recently Played"} data={recentlyPlayed.tracks} code={code}/>
                    {/* <ArtistCarousel title={"Recommended Artists"} data={artists}  code={code}/> */}
                   <Squares title={"Recommended Songs"} data={recommendations.tracks} code={code}/>
                </ScrollView>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: 40,
        color: colors.white,
    },
    welcomeContainer: {
        padding: 10,
        flexDirection:'row',
        justifyContent:'center'
    },
    icon:{
        paddingTop:5
    },
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
