import { MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity  } from 'react-native';
import Color from '../../../constants/Color';
import Message from '../../../types/message';

const styles = StyleSheet.create({
    TouchableOpacity:{
        flexDirection: 'row',
        // justifyContent: this.props.isUser ? 'flex-end' : 'flex-start',
        // alignContent: this.props.isUser ? 'flex-end' : 'flex-start',
        // alignItems: this.props.isUser ? 'flex-end' : 'flex-start',
        
        maxWidth: '80%',
        marginBottom: 10,
        marginHorizontal: 10,
    },
    notUserContainer: {
        backgroundColor: Color.gray,
        borderRadius: 20,
        padding: 10,
        margin: 10,
        
    },
    notUserText: {
        color: 'black',
        fontSize: 15
    },
    isUserContainer: {
        backgroundColor: Color.green.midnightGreen,
        borderRadius: 20,
        padding: 10,
        margin: 10,
        
    },
    isUserText: {
        color: 'white',

        fontSize: 15
    },

});

interface Props {
    message: Message;
    isUser : boolean;
}



class MessagesBuble extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.TouchableOpacity && {
                // justifyContent: this.props.isUser ? 'flex-end' : 'flex-start',
                // alignContent: this.props.isUser ? 'flex-end' : 'flex-start',
                alignItems: this.props.isUser ? 'flex-end' : 'flex-start',
            }}>
                <View style= {{alignItems: this.props.isUser ? 'flex-end' : 'flex-start'}}  >
                    <View style= {this.props.isUser ? styles.isUserContainer : styles.notUserContainer }>
                        <Text style={this.props.isUser ? styles.isUserText : styles.notUserText}> {this.props.message.content} </Text>
                    </View>
                    <Text style={{fontSize: 10, marginHorizontal: 10} } > {this.props.message.createdAt.toLocaleDateString()}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default MessagesBuble;