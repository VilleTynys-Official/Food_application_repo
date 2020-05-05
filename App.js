import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
/*
Client ID
QeSXZe341EQz6UuRIDdndg

API Key
DgJZNagjVLxH2y10NUHTZ623DNfqiQ-2zAekaqV82ZmZO6Je1OHSWeKuSEomABv3YXmX7ZFJ66vY5Wppscc4RKkz3GkSc2wYNPzSknJPrAcvTaeliGVFYuYoMgqxXnYx
*/


const navigator = createStackNavigator({
  Search : SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'Business Search',
    
  }
}

);

//creates a default component and displays the content of this component (now has navigator)
export default createAppContainer(navigator);
