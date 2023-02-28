import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const style = StyleSheet.create({
    searchBar : {
        backgroundColor: 'white',
        // borderWidth: 1,
        width: '90%',
        height: 35,
        alignSelf: 'center',
        borderRadius: 7,
        paddingLeft: 10,
        marginVertical: 15,
    }
});



class ExpertsHeader extends React.Component {
    render() {
        return (
            <TextInput
                enablesReturnKeyAutomatically={true}
                returnKeyType="search"
                returnKeyLabel='Recherche'
                placeholder={'Recherche...'}
                style={style.searchBar}
            />

        );
    }
}

export default ExpertsHeader;