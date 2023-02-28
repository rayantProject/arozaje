import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import TabMenuGarden from '../../components/drawer/garden/TabMenuGarden';

import UserHeader from '../../components/drawer/garden/UserHeader';





const style = StyleSheet.create({

  
    container: {  
        // backgroundColor: MainStyle.view.backgroundColor,
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignItems: 'center',
        
        // width: '90%',
        height: '100%',
        // flexDirection: 'row',
        paddingVertical: 5,
    }});


class GardenView extends React.Component {
    render() {
        return (
          <SafeAreaView style={style.container}>
            <UserHeader />
            <TabMenuGarden />
          </SafeAreaView>
        );
      }

    
}

export default GardenView;