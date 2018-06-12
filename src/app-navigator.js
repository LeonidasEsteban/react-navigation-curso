import React from 'react';
import { Text, ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView, createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import About from './screens/containers/about';
import Lucky from './screens/containers/lucky';
import Icon from './screens/components/home-icon';
import DrawerContent from './sections/components/drawer';

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

const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: WithModal,
      navigationOptions: {
        title: 'Inicio',
        drawerIcon: Icon,
      }
    },
    Sobre: {
      screen: About
    },
    Suerte: {
      screen: Lucky,
    },
  },
  {
    drawerWidth: 200,
    drawerBackgroundColor: '#f6f6f6',
    backgroundColor: 'red',
    contentComponent: DrawerContent,
    contentOptions: {
      activeBackgroundColor: '#7aba2f',
      activeTintColor: 'white',
      inactiveTintColor: '#828282',
      inactiveBackgroundColor: 'white',
      itemStyle: {
        borderBottomWidth: .5,
        borderBottomColor: 'rgba(0,0,0,.5)',
      },
      labelStyle: {
        marginHorizontal: 0,
      },
      iconContainerStyle: {
        marginHorizontal: 5,
      }
    }
  }
)

const Main = createStackNavigator(
  {
    Main: Drawer
  },{
    headerMode: 'none',
  }
)


export default Main;
