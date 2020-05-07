import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
//komponentti joka tarjoaa ResultsList:lle kivan visuaalisen ilmeen.

//image source <3 uri objektia!!!!

const ResultsDetail = ({result}) =>{
    return(
    <View style={styles.ContainerStyle}>
        <Image style={styles.imageStyle}
            source={{ uri: result.image_url}}  />
        <Text style={styles.nameStyle}>
            {result.name}
            </Text>
        <Text>
            Stars: {result.rating}, Reviews: {result.review_count}
            </Text>
     


    </View>
    );
};



const styles = StyleSheet.create({
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5

    },
    nameStyle: {
        fontWeight: 'bold',
    },
    ContainerStyle:{
        marginLeft: 15
    }



});


export default ResultsDetail;