import React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SeachBar'
import yelp from '../api/yelp';

/*
DAY 4
    
    CONNECTING TO YELP API
        setup axios
            API key
            baseURL
        callback to manage states

    FLOW OF THE SEARCH SCREEN
        LIFECYCLE FUNCTIONS
            useEffect (update e.g. when first rendered or first rendered and when value inside the array changes..)

*/ 




//pass down state and onTermChange to Searchbar.
//SearchBar uses the onTermChange and changes the term here.
const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [results, setResults] =useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    //async funktio joka hakee yelpistä tulokset arrayna.
    //params:    asettaa lisäsanoja kyselyyn (käyttämällä ?merkkiä..)
    const searchApi = async(searchTerm) =>{


    try{
        const response = await yelp.get('/search', {
            params: {
                limit: 10,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);     // array asetetaan vastaus muuttujaan.
        
    } catch(err){
        setErrorMessage('Something went wrong');
    }


    };




    
//BAAAD CODE:
//Call searchApi when component is first rendered.
//searchApi('pasta');       >>>parent renders multiple times so this would also..

//GOOD CODE:
//käytä useEffect() joka renderöityy vain kerran.
useEffect(()=>{
    //console.log('useEfffect eka kerta')
    searchApi('pasta');
}, []);


    return(
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm)=> setTerm(newTerm)}
                onTermSubmit={ () =>searchApi(term)}/>


            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>we have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;
