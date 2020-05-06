import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


//FlatList <3 renderItem!!!!!!!
//image source <3 uri objekti!!!!

const ResultsDetail = ({result}) =>{
    return(
    <View>
        <Image style={styles.imageStyle}
            source={{ uri: result.image_url}}  />
        <Text style={styles.nameStyle}>
            {result.name}
            </Text>
        <Text style={styles.nameStyle}>
            Stars: {result.rating}, Reviews: {result.review_count}
            </Text>
     


    </View>
    );
};



const styles = StyleSheet.create({
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 4

    },
    nameStyle: {
        fontWeight: 'bold',
    }


});


export default ResultsDetail;