import Carousel from 'react-native-snap-carousel';
import React from 'react';
import {Dimensions, Image, StyleSheet, View, Text} from 'react-native';


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
    marginHorizontal: 30,
    },
    text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    },
});

interface State {
    stories: Array<{id: number; imageUrl: string}>;
    activeIndex: number;
}

class StoryView extends React.Component<{}, State> {
    constructor(props: {}) {
    super(props);
    this.state = {
        stories: [
        {id: 1, imageUrl: '../../../assets/test/imagePlant.png'},
        {id: 2, imageUrl: '../../../assets/test/plant2.png'},
        {id: 3, imageUrl: '../../../assets/test/plant1.png'},
        ],
        activeIndex: 0,
    };
    }

    render() {
    return (
        <View style={styles.container}>
        <Carousel
            data={this.state.stories}
            renderItem={({item}) => (
            <Image source={{uri: item.imageUrl}} style={styles.image} />
            )}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width - 60}
            onSnapToItem={index => this.setState({activeIndex: index})}
        />
        <Text style={styles.text}>
            Story {this.state.stories[this.state.activeIndex].id}
        </Text>
        </View>
    );
    }
}


export default StoryView;