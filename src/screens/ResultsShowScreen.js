import React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';



const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null); //for objects the default value is 'null'
    const id = navigation.getParam('id');

    //console.log(id)

    //hakee datan ja asettaa sen result muuttujaan.
    const getResult = async (id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        //console.log(response.data)
    };

    //määrää et getResult suoritetaan vain kerran.
    useEffect(() =>{getResult(id);}, []);

    if (!result){           //ei näytetä mitään jos result on null.
        return null;
    }

    return(
   
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=> photo}
                renderItem={( {item} )=>{
                    return (
                        <Image
                            style= {styles.imageStyle}
                            source= {{ uri: item }}/>
                    )


                }}
            />
        </View>
            

    )
};

const styles = StyleSheet.create({
    imageStyle: {
        height:200,
        width: 300
        
    }
});

export default ResultsShowScreen;
