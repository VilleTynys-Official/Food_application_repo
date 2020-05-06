import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SeachBar'





//pass down state and onTermChange to Searchbar.
//SearchBar uses the onTermChange and changes the term here.
const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    return(
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm)=> setTerm(newTerm)}
                onTermSubmit={()=>console.log('term was submitted')} 
            />
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;
