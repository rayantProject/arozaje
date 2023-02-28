import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';

interface Story {
  id: number;
  imageUrl: string;
  title: string;
}

interface Props {
  stories: Story[];
}

interface State {
  activeStoryIndex: number;
}

class StoryCarousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeStoryIndex: 0,
    };
  }

  handleStoryPress = (index: number) => {
    this.setState({ activeStoryIndex: index });
  };

  render() {
    const { stories } = this.props;
    const { activeStoryIndex } = this.state;

    return (
      <View style={styles.container}>
        {stories.map((story, index) => (
          <TouchableWithoutFeedback key={story.id} onPress={() => this.handleStoryPress(index)}>
            <View style={[styles.storyContainer, index === activeStoryIndex && styles.activeStoryContainer]}>
              <Image source={{ uri: story.imageUrl }} style={styles.storyImage} />
              <Text style={[styles.storyTitle, index === activeStoryIndex && styles.activeStoryTitle]}>{story.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const storyWidth = width / 4;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: storyWidth + 20,
  },
  storyContainer: {
    width: storyWidth,
    height: storyWidth,
    borderRadius: storyWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  activeStoryContainer: {
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: storyWidth / 2,
  },
  storyTitle: {
    marginTop: 5,
    fontSize: 12,
    color: '#a9a9a9',
  },
  activeStoryTitle: {
    color: '#ffffff',
  },
});

export default StoryCarousel;
