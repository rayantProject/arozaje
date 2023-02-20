import * as React from 'react';
import { TextInput, View } from 'react-native';


class MessageInput extends React.Component {




    render() {
        return (
            <View style={{
                // position: 'fixed',
                position : 'absolute',
                width: '100%',
                bottom: 0
            }}>
                <View style={{
                    width: '100%',
                    height: 80,

                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    }}>
                <TextInput
                    style={{ height: 35, 
                            // borderColor: 'gray', 
                            marginTop: 10,
                            borderWidth: 1, 
                            width: '80%', 
                            borderRadius: 40, 
                            padding: 10, 
                            // backgroundColor: 'white'
                        }}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType="send"

                />

                </View>
            </View>
        );
    }
}

export default MessageInput;