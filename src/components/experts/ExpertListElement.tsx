import * as React from 'react';
import User from '../../types/user';
import { Text, View, StyleSheet, Image  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Color from '../../constants/Color';

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    // borderRadius: 20,
    border: 1,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 2,
  },

    secondContainer : {
    
    },
  name : {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  rate : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
    image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    }
    
});

class ExpertListElement extends React.Component {
  render() {
    return (
      <View style={style.container}>
        
          <Image style={style.image} source={require('../../assets/test/photo.png')} />
          <View style={style.secondContainer} >
          <Text style={style.name}>Amira Traore</Text>
          <View style={style.rate}>
            <MaterialIcons name="star" color={"gold"} size={20} />
            <MaterialIcons name="star" color={"gold"} size={20} />
            <MaterialIcons name="star" color={"gold"} size={20} />
            <MaterialIcons name="star" color={"gold"} size={20} />
            <MaterialIcons name="star" color={"gold"} size={20} />
          </View>
          </View>
      
      </View>
    );
  }
}


export default ExpertListElement;