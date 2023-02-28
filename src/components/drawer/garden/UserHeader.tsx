import * as React from 'react';
import User from '../../../types/user';
import { Text, View, StyleSheet, Image  } from 'react-native';
// import TabBarIcon from '../../../constants/Color';
import Color from '../../../constants/Color';
import TabBarIcon from '../../../utils/TabIcon';

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    width: '95%',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 15,
  },
  name : {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  rate : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  }
});

class UserHeader extends React.Component {
  render() {
    return (
      <View style={style.container}>
        
          <Image source={require('../../../assets/test/photo.png')} />
          <View>
          <Text style={style.name}>Amira Traore</Text>
          <View style={style.rate}>
            <TabBarIcon name="star" color={"gold"} />
            <TabBarIcon name="star" color={"gold"} />
            <TabBarIcon name="star" color={"gold"} />
            <TabBarIcon name="star" color={"gold"} />
            <TabBarIcon name="star" color={"gold"} />
          </View>
          </View>
      
      </View>
    );
  }
}


export default UserHeader;