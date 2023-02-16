import { Link } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

import Color from '../../constants/Color';
import TabBarIcon from '../../utils/TabIcon';


const style = StyleSheet.create({
    container : {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '100%',
    },
    button : {
        width: 100,
        height: 60,
        borderRadius: 25,
        // elevation: 10,
        // shadowColor: 'black',
        // shadowOpacity: 0.3,
        // shadowRadius: 5,
        // shadowOffset: { width: 0, height: 5 },
        // backgroundColor: 'green',
        backgroundColor: Color.green.myrtleGreen,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 15,
    },
    image: {
        // width: 100,
        // height: 100,
        borderRadius: 25,
        marginVertical: 20,
    },
    text : {
        fontSize: 20,
        color: Color.green.dark ,
        fontWeight : 'bold',
    }

});

class KeepPlantModal extends React.Component {
  render() {
    return (
        <View>
            <View style={style.container} >
                <Text style={style.text}>LE POTHOS N’JOY</Text>
                <Image style={style.image} source={ require("../../assets/test/imagePlant.png") } />
                <Link to={{screen: "camera"}}>
                    <View  style={style.button}>
                        <TabBarIcon name="add-a-photo" color='white' />
                    </View>
                </Link>
            </View>
        </View>
    );
    }
    }



export default KeepPlantModal;