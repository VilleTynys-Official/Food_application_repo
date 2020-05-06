import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsList = ({title}) =>{
    return <View style={styles.listViewStyle}>
        <Text style={styles.title} >{title}</Text>
        <Text>ResultsList</Text>
    </View>

}



const styles = StyleSheet.create({
    listViewStyle:{
        backgroundColor: 'rgb(230,230,240)'
    },
    title:{
        backgroundColor: 'gray',
        fontSize: 20,
        fontWeight: "bold"
        
        
    }


});


export default ResultsList;