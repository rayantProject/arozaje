import * as React from 'react';
import Navigation from './src/navigation/Navigation';
// import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeView from './src/screens/HomeView';
// import ProfilView from './src/screens/ProfilView';
const Tab = createBottomTabNavigator();


class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
          <Navigation />

          <StatusBar />
        
      </SafeAreaProvider>
    );
  }
}

export default App;