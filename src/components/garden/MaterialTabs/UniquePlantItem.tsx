import * as React from 'react';

import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import Color from '../../../constants/Color';
import {useNavigation} from '@react-navigation/native';


const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    // width: '50%',
    backgroundColor: Color.white,
    padding: 4,
    borderRadius: 15,
    alignItems: 'center',
  },
  img : {
    borderRadius: 15,
    width: 180,
    height: 180,
  }
});



function UniquePlantItem() {
  
  const navigation = useNavigation();


  
    return (
      <View style={style.container}>
        <Pressable
          onPress={() => navigation.navigate('KeepPlantModal')  }
        >
          <Image style={style.img} source={require('../../../assets/test/imagePlant.png')} />
          <Text >LE POTHOS N’JOY</Text>
        </Pressable>
      </View>
    );
  
}

export default UniquePlantItem;