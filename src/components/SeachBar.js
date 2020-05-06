import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
        
    return(
        <View style={styles.backgroundStyle}>
            <Feather name= 'search'
                    style= {styles.iconStyle}
            />
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style= {styles.inputStyle} 
            placeholder= "Search"
            value= {term}
            onChangeText = {onTermChange}
            onEndEditing={onTermSubmit}
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(220,220,220)',
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        
    },
    inputStyle: {
        //borderColor: 'black',
        //borderWidth: 2,
        fontSize: 18,
        left: 0,
        flex: 1
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10

    }


});

export default SearchBar;
