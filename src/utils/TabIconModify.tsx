import * as React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import Color from '../constants/Color';



class TabIconModify extends React.Component<{
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
}> {
    render() {
        return (
            <View style={{

                width: 60,
                height: 60,
                
                borderRadius: 25,
                elevation: 10,
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowRadius: 5,
                shadowOffset: { width: 0, height: 5 },
                // backgroundColor: 'green',
                backgroundColor: Color.green.myrtleGreen,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 15,
            }} >
                <MaterialIcons size={30} style={{ marginBottom: -3 }} {...this.props} />
            </View>
        );
    }
}


export default TabIconModify;