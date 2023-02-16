import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import Color from '../../constants/Color';
import KeepPlants from './MaterialTabs/KeepPlants';
import OurPlants from './MaterialTabs/OurPlants';

const Tab = createMaterialTopTabNavigator();


function TabMenuGarden() {
  return (
    <Tab.Navigator
    screenOptions={
      {
        tabBarPressColor: Color.green.myrtleGreen,
        tabBarIndicatorStyle: {
          backgroundColor: Color.green.myrtleGreen,
        }
      }
    }

    >
      <Tab.Screen name="KeepPlants" component={KeepPlants}  options={{ tabBarLabel: 'Garde' }}/>
      <Tab.Screen name="OurPlants" component={OurPlants}   options={{ tabBarLabel: 'Mes plantes' }}/>
    </Tab.Navigator>
  );
}

export default TabMenuGarden;