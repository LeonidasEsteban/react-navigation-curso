import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import About from './screens/containers/about';
import Lucky from './screens/containers/lucky';
import Icon from './screens/components/home-icon';

const routes = {
  // Movie: {
  //   screen: Movie
  // },
  Home: {
    screen: Home
  },
}
// const didUpdate = createDidUpdateCallback("root");

const AppNavigator = createStackNavigator(routes, {
  initialRouteName: 'Home',
  headerMode: 'float',
  mode: 'card',
  headerTransitionPreset: 'fade-in-place',
  cardStyle: {
    backgroundColor: 'white',
  }
})




const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: AppNavigator,
    navigationOptions: {
      title: 'Inicio',
      tabBarIcon: Icon,
    }
  },
  About: {
    screen: About
  },
  Lucky: {
    screen: Lucky,
  },
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: '#65a721',
  }
})

const WithModal = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    Movie: {
      screen: Movie,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white',
    },
    navigationOptions: {
      gesturesEnabled: true,
    }
  }
);

export default WithModal;
