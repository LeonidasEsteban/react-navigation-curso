import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Link,
  Image,
  StatusBar
} from 'react-native';

class About extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Sobre esta app',
      activeTintColor: 'blue',
      tabBarIcon: <Text>🤓</Text>,
      drawerIcon: <Text>🤓</Text>,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: 'https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png'}}
          style={styles.logo}
        />
        <Text style={styles.text}>Platzi Video es construido como una aplicación educativa para enseñar React Native y React Navigation</Text>
        <Text style={styles.text}>@LeonidasEsteban</Text>
        <Text style={styles.text}>2019</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  }
})

export default About
