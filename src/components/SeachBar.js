import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



const SearchBar = () =>{
    return(
        <View style={styles.background}>
            <Text>Search Bar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(220,220,220)',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15
        
        
    }

});

export default SearchBar;
