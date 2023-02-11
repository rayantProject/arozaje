import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootComponent from '../components/RootComponent';

class Navigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <RootComponent />
                
            </NavigationContainer>
        );
    }
}

export default Navigation;