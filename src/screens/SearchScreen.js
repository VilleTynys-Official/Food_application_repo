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

    return(
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm)=> setTerm(newTerm)}
                onTermSubmit={()=>console.log('term was submitted')} 
            />
            <Text>we have found{results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;
