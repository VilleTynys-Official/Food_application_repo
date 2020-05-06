import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './ResultsDetail';

//FlatList <3 renderItem!!!!!!!

const ResultsList = ({title, results}) =>{
    return(
    <View style={styles.listViewStyle}>

        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data= {results}
            keyExtractor= {result => result.id}
            renderItem= {({item}) => {
               return <ResultsDetail
                        result= {item}
                    />
            }}
            />
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


export default ResultsList;