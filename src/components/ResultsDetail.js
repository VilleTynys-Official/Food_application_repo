import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


//FlatList <3 renderItem!!!!!!!

const ResultsDetail = ({title, results}) =>{
    return(
    <View style={styles.listViewStyle}>
        <Text>results detail component</Text>
    </View>
    );
};



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


export default ResultsDetail;