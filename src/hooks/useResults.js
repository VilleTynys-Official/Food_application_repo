import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

/*


*/


export default () =>{
        const [results, setResults] =useState([]);
        const [errorMessage, setErrorMessage] = useState('');
        
        //async funktio joka hakee yelpistä tulokset arrayna.
        //params:    asettaa lisäsanoja kyselyyn (käyttämällä ?merkkiä..)
        const searchApi = async(searchTerm) =>{


        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
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
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];




};