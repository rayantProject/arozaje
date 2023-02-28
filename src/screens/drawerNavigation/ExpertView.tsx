import * as React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import ExpertsHeader from "../../components/drawer/experts/ExpertsHeader";
import ExpertListElement from "../../components/drawer/experts/ExpertListElement";
const data = Array(1).fill(0);
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
    navigation.navigate("message");
}

renderItem = () => (
    <TouchableOpacity onPress={this.handlePress}>
    <ExpertListElement />
    </TouchableOpacity>
);

render() {
    return (
    <FlatList
        ListHeaderComponent={<ExpertsHeader />}
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
    />
    );
}
}

export default ExpertView;
