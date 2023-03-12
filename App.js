import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from 'react-native-vector-icons'
import Home from './Home';
import Header from './Header';
import LoginPage from './LoginPage';
import AlbumPage from './AlbumPage';
import colors from './colors';
import Stats from './Stats';

const AppNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ({ route }) => {
  const { code } = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
  
        tabBarStyle: {
          backgroundColor: colors.lighterDarkGray,
          borderTopWidth: 0
        } }}
    >
      <Tab.Screen name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" size={25} color={color} />
          )
        }} >
        {() => <Home code={code} />}
      </Tab.Screen>
      <Tab.Screen name='Stats' 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-stats-chart" size={25} color={color} />
          )
        }} >
        {() => <Stats code={code} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigator.Navigator screenOptions={{
          title: "musaic",
          headerStyle: {
            backgroundColor: colors.green,
          },
          headerLeft: () => null
        }} >
          <AppNavigator.Screen name="Login" component={LoginPage} />
          <AppNavigator.Screen name='TabNav' component={TabNavigator} />
          <AppNavigator.Screen name='AlbumPage' component={AlbumPage} />
        </AppNavigator.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
