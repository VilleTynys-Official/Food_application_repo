import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SeachBar'


const SearchScreen = () =>{
    return(
        <View>
            <SearchBar></SearchBar>
            <Text>This is search screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;
