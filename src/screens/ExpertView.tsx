import * as React from 'react';
import { Text, ScrollView, FlatList, Touchable, TouchableOpacity  } from 'react-native';
import ExpertsHeader from '../components/experts/ExpertsHeader';
import ExpertListElement from '../components/experts/ExpertListElement';

// import { NavigationScreenProp } from 'react-navigation';

const data = Array(10).fill(0);

interface Props {
    navigation: any;
}
class ExpertView extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
        this.handlePress = this.handlePress.bind(this); 
    }

    handlePress() {
      const { navigation } = this.props;
      navigation.navigate('message');
    }

    renderItem = () => (
        <TouchableOpacity onPress={this.handlePress}>
            <ExpertListElement />
        </TouchableOpacity>
    );


    render() {
        return (
            <ScrollView>
                <ExpertsHeader />
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />

            </ScrollView>
        );
      }

    
}

export default ExpertView;