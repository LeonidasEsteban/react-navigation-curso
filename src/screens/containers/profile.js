import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
  handleLogout = () => {
    this.props.dispatch({
      type: 'REMOVE_USER'
    })
    this.props.navigation.navigate('Loading')
  }
  static navigationOptions = () => {
    return {
      tabBarIcon: <Text>😎</Text>,
      title: 'Perfil'
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.user.username}</Text>
        <Button
          onPress={this.handleLogout}
          title="Cerrar sesión"
          color="#67a52e"
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
