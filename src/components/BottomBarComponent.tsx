import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../screens/SearchView';
import MapView from '../screens/MapView';

import TabBarIcon from '../utils/TabIcon';
import GardenView from '../screens/GardenView';
import SettingView from '../screens/SettingView';
import ExpertView from '../screens/ExpertView';
import style from '../utils/mainStyle';


interface TabScreen {
    name: string;
    component: React.ComponentType<any>;
    options?: any;
}




const tabScreens: TabScreen[] = [
   
    {
        name: 'map',
        component: MapView,
        options: {
            
            tabBarIcon: ({ color = "black" }) => <TabBarIcon name="map" color={color} />
        }
    },
  
    {
        name: 'experts',
        component: ExpertView,
        options: {
            
            tabBarIcon: ({ color = "black" }) => <TabBarIcon name="groups" color={color} />
        }
    },  {
        name: 'recherche',
        component: HomeView,
        options: {
            
            tabBarIcon: ({ color = "black" }) => <TabBarIcon name="search" color={color} />
        }
    
    },
    {
        name: 'mon jardin',
        component: GardenView,
        options: {
            
            tabBarIcon: ({ color = "black" }) => <TabBarIcon name="grass" color={color} />
        }
    },
    {
        name: 'reglage',
        component: SettingView,
        options: {
            
            tabBarIcon: ({ color = "black" }) => <TabBarIcon name="settings" color={color} />
        }
    }
];
const Tab = createBottomTabNavigator();

class BottomBarComponent extends React.Component {

    render() {
        return (
            <Tab.Navigator
                initialRouteName="Acceuil"
                screenOptions={
                    {}
                }
            >
                {tabScreens.map((screen, index) => (
                    <Tab.Screen
                        key={index} 
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                ))}
            </Tab.Navigator>
        );
      }
}


export default BottomBarComponent;