import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import { createStackNavigator } from 'react-navigation';


const routes = {
  Movie: {
    screen: Movie
  },
  Home: {
    screen: Home
  },


}

const AppNavigator = createStackNavigator(routes, {
  initialRouteName: 'Home',
  headerMode: 'float',
  mode: 'card',
  headerTransitionPreset: 'fade-in-place'
})

export default AppNavigator;
