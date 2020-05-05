import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


const SearchBar = () =>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name= 'search' size={30}></Feather>
            <TextInput style= {styles.inputStyle}placeholder= "Search"></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(220,220,220)',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        //borderColor: 'black',
        //borderWidth: 2,
        flex: 1
    }


});

export default SearchBar;
