import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation'


//komponentti tarjoaa FlatListan, jossa esitetään api haun tulokset (results json.)
//FlatList <3 data, keyExtractor and renderItem!!!!!!!

const ResultsList = ({title, results, navigation}) =>{
    return(
    <View style={styles.container}>

        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data= {results}
            keyExtractor= {result => result.id}
            renderItem= {({item}) => {
               return(
                    <TouchableOpacity onPress={
                        ()=> navigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultsDetail result= {item}/>
                    </TouchableOpacity>
               )
            }}
        />
    </View>
    );
};



const styles = StyleSheet.create({
    container:{
        marginBottom: 10

    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    }


});

//withNavigation lisää navigoinnin suoraan resultsListiin.
export default withNavigation(ResultsList);