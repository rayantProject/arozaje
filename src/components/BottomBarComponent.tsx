import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../screens/SearchView';
import MapView from '../screens/MapView';
import { Pressable, StyleSheet } from 'react-native';
import { View } from 'react-native';

import TabBarIcon from '../utils/TabIcon';
import GardenView from '../screens/GardenView';
import SettingView from '../screens/SettingView';
import ExpertView from '../screens/ExpertView';
import Color from '../constants/Color';
import TabIconModify from '../utils/TabIconModify';


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
            title: 'Map',
            tabBarIconName:"map"
        }
    },
  
    {
        name: 'experts',
        component: ExpertView,
        options: {
            title: 'Experts', 
            tabBarIconName:"groups"
        }
    },  
   
    {
        name: 'garden',
        component: GardenView,
        options: {

            title: 'mon jardin',
            tabBarIconName: "grass"
            // headerShown: false,
        }
    }, {
        name: 'search',
        component: HomeView,
        options: {
            title: 'rechercher',
            tabBarIconName:"search" 
        }
    
    },
    {
        name: 'setting',
        component: SettingView,
        options: {
            title: 'paramètres',
            tabBarIconName:"settings"
        }
    }
];
const Tab = createBottomTabNavigator();

class BottomBarComponent extends React.Component {

    render() {
        return (
            <Tab.Navigator 
            initialRouteName="garden"
            screenOptions={
                {
                    tabBarActiveTintColor: Color.green.myrtleGreen,
                }
            }
            >
                {tabScreens.map((screen, index) => (
                    <Tab.Screen
                        key={index} 
                        name={screen.name}
                        component={screen.component}
                        options= {
                            {
                                
                                tabBarLabel: screen.name == 'garden' ? () => null : screen.options.title,
                                tabBarIcon: ({ focused, color, size }) => {
                                    return (
                                        screen.name === 'garden' ? (<TabIconModify name={screen.options.tabBarIconName} color={"white"} ></TabIconModify>) : (<TabBarIcon name={screen.options.tabBarIconName} color={color} />)
                                    );
                                },
                                headerTitle : screen.options.title,
                            }
                        }
                    />
                ))}
            </Tab.Navigator>
        );
      }
}


export default BottomBarComponent;