import * as React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { TextInput, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, FlatList  } from 'react-native';
import Color from '../../constants/Color';

import MessagesBuble from '../../components/drawer/chat/MessagesBuble';
import Message from '../../types/message';
import User from '../../types/user';


const styles = StyleSheet.create({
    globalView : {
        flex: 1,
    },
    viewInput: {
        width: '100%',
        bottom: 0,
        height: 90,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        
    },
    TextInput: {
        height: 40, 
        // borderColor: 'gray', 
        
        marginTop: 10,
        borderWidth: 1, 
        width: '80%', 
        borderRadius: 40, 
        padding: 10, 
    },
    send : {
        marginTop: 10,
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: Color.green.midnightGreen,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, 
        marginLeft: 10,
    },
    sendIcon : {
        fontSize: 20,
    },
    FlatList: {

    }
});

interface State {
    messages: Message[];
    user: User;
    messageContent : string;
}

class MessageView extends React.Component<{}, State>{
    private flatListRef = React.createRef<FlatList<Message>>(); // Créer une référence à la liste de messages.
    private textInputRef = React.createRef<TextInput>(); // Créer une référence au champ de saisie.
    constructor(props: {}) {
        super(props);
        this.state = {
            messages: [],
            user: {
                id: 1,
                name: 'test',
                email: '',
                password: '',
                role: "user",
                address: '',
                firstName: '',
                lastName: '',
            },
            messageContent: '',
        };
    }

    updateMessages = () => {
        const newMessage = {id: 1, content: this.state.messageContent, createdAt: new Date(), user: this.state.user};
        this.setState({
          messages: [...this.state.messages, newMessage],
           // Ajouter cette ligne pour effacer le champ de saisie après l'envoi d'un message.
           messageContent: '',
        }, () => {
          this.flatListRef.current?.scrollToEnd(); // Cette ligne appelle scrollToEnd() après la mise à jour de la liste.
            this.textInputRef.current?.clear(); // Cette ligne efface le champ de saisie après l'envoi d'un message.

        });
      };
      

    updateMessageContent = (messageContent: string) => {
        this.setState({messageContent: messageContent});
    }    
    render() {
        return (
            <KeyboardAvoidingView 
                style={styles.globalView}
                behavior="padding" keyboardVerticalOffset={160} 
            >
                <FlatList
                    ref={this.flatListRef}
                    style={styles.FlatList}
                    data={this.state.messages}
                    renderItem={({item}) => <MessagesBuble message={item} isUser={true} />}
                    keyExtractor={(item, index) => index.toString()}
                />
                


                <KeyboardAvoidingView  style={styles.viewInput}
                    behavior="padding" keyboardVerticalOffset={150}
                
                >
                 
                        <TextInput
                            ref={this.textInputRef}
                            style={styles.TextInput}
                            enablesReturnKeyAutomatically={true}
                            returnKeyType="send"
                            onChangeText={(messageContent) => this.updateMessageContent(messageContent)}
                            onSubmitEditing={this.updateMessages}

                        />

                        <TouchableOpacity  style={styles.send} onPress={this.updateMessages}>
                            <MaterialIcons style={styles.sendIcon} name="send" color={"white"} />
                        </TouchableOpacity >

                </KeyboardAvoidingView>
            </KeyboardAvoidingView>
        );
    }
}

export default MessageView;