import * as React from 'react'; 
import { Pressable, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBarComponent from './BottomBarComponent';
import KeepPlantModal from './modal/KeepPlantModal';
import CameraView from '../../utils/Camera';
import MessageView from '../../screens/drawerNavigation/MessageView';
import StoryView from './garden/story/StoryView';
const Stack = createNativeStackNavigator();

class RootComponent extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Root" 
                    component={BottomBarComponent} 
                    options={{ headerShown: false }}
                    
                />
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="KeepPlantModal" component={KeepPlantModal}  options={{ headerTitle: "Plante gardé" }} />
                </Stack.Group>
                <Stack.Group screenOptions={({navigation : {goBack}}) => 
                            ({ 
                                presentation: 'transparentModal',
                                headerLeft: () => (
                                    <Pressable style={{
                                        marginRight: 20,
                                    }} onPress={() => goBack() }>
                                    </Pressable>)
                            }) }>
                        <Stack.Screen name="camera" component={CameraView} 
                    options={
                        ({ navigation }) => ({
                            headerTitleAlign: 'center',
                        })} 
                        />
                        
                </Stack.Group>

                <Stack.Group screenOptions={{ presentation: 'card' }}>
                    <Stack.Screen name="message" component={MessageView} options={{ headerTitle: "Message" }} />
                </Stack.Group>
            </Stack.Navigator>

        );
    }
    }

export default RootComponent;
