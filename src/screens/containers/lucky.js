import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Search from '../../sections/containers/search';

class Lucky extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarIcon: <Text>⭐️</Text>,
      drawerIcon: <Text>⭐️</Text>,
      title: 'Voy a tener suerte',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>🍀</Text>
        <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lucky
