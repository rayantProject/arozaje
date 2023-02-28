import * as React from 'react';

import { Text, View, StyleSheet, ScrollView  } from 'react-native';
import UniquePlantItem from './UniquePlantItem';

const style = StyleSheet.create({
  containerOfPlant: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      paddingTop: 10,
      justifyContent: 'space-around'
    }});





class KeepPlants extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={style.containerOfPlant}>
          <UniquePlantItem />
          <UniquePlantItem />
      </View>
      <View style={style.containerOfPlant}>
          <UniquePlantItem />
          <UniquePlantItem />
      </View>
      <View style={style.containerOfPlant}>
          <UniquePlantItem />
          <UniquePlantItem />
      </View>
      <View style={style.containerOfPlant}>
          <UniquePlantItem />
          <UniquePlantItem />
      </View>
      <View style={style.containerOfPlant}>
          <UniquePlantItem />
          <UniquePlantItem />
      </View>
  </ScrollView>

    );

  }

}

export default KeepPlants;