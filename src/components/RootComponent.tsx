import * as React from 'react'; 

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBarComponent from './BottomBarComponent';
const Stack = createNativeStackNavigator();

class RootComponent extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomBarComponent} options={{ headerShown: false }}  />
                
            </Stack.Navigator>

        );
    }
    }

export default RootComponent;
