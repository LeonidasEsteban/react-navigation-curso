import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import API from '../../../utils/api';
import { connect } from 'react-redux';
import { NavigationActions, withNavigation, StackActions } from 'react-navigation';

class Search extends Component {
  state = {
    text: ''
  }
  handleSubmit = async () => {
    const movies = await API.searchMovie(this.state.text);
    console.log(movies)
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: movies[0]
      }
    })
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Movie'
      })
    );

  }
  handleChangeText = (text) => {
    this.setState({
      text
    })
  }
  render() {
    return (
      <SafeAreaView>
        <TextInput
          placeholder="Busca tu película favorita"
          autoCorrent={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          onSubmitEditing={this.handleSubmit}
          onChangeText={this.handleChangeText}
          style={styles.input}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  }
})

export default withNavigation(connect(null)(Search));
