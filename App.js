import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Header from './Header';
import LoginPage from './LoginPage';
import AlbumPage from './AlbumPage';

const AppNavigator = createStackNavigator();

export default function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <AppNavigator.Navigator screenOptions={{
          headerShown: false
        }}>
          <AppNavigator.Screen name="Login" component={LoginPage} />
          <AppNavigator.Screen name="Home" component={Home} />
          <AppNavigator.Screen name='AlbumPage' component={AlbumPage}/>
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
