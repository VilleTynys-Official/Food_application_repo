import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SeachBar'
import yelp from '../api/yelp';




//pass down state and onTermChange to Searchbar.
//SearchBar uses the onTermChange and changes the term here.
const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [results, setResults] =useState([]);
    const [errosMessage, setErrorMessage] = useState('');
    
    //async funktio joka hakee yelpistä tulokset arrayna.
    //params:    asettaa lisäsanoja kyselyyn (käyttämällä ?merkkiä..)
    const searchApi = async() =>{


    try{
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: term,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);     // array asetetaan vastaus muuttujaan.
        
    } catch(err){
        setErrorMessage('Something went wrong');
    }


    };

    return(
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm)=> setTerm(newTerm)}
                onTermSubmit={searchApi} 
            />
            <Text>{errosMessage}</Text>
            <Text>we have found{results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;
