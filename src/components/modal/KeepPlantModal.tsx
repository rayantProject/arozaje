import { Link } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, Image, StyleSheet,  TouchableOpacity } from 'react-native';

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
        
        backgroundColor: Color.green.myrtleGreen,
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 15,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 60,
        
    
    },
    text : {
        fontSize: 20,
        color: Color.green.dark ,
        fontWeight : 'bold',
    }, 
    storyBtn : {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
        marginVertical: 20,
        borderWidth: 5,
        borderColor: Color.green.dark,
    
    }

});


class KeepPlantModal extends React.Component {
  render() {
    return (
        <View>
            <View style={style.container} >
                <Text style={style.text}>LE POTHOS N’JOY</Text>
                <TouchableOpacity style={style.storyBtn}>
                    <Image style={style.image} source={require('../../assets/test/imagePlant.png')} />
                </TouchableOpacity>

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