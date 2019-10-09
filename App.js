import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'FO0D!Z',
    },
  },
);

export default createAppContainer(navigator);
