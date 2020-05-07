import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ResultsShowScreen = ({navigation}) =>{
    const id= navigation.getParam('id');
    console.log(id)


    return(
   
        <View>
            <Text>results show screen</Text>
        </View>
            

    )
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
