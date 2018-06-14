import React, { Component, Fragment } from 'react';
import {
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';

import API from '../../../utils/api';
import Search from '../../sections/containers/search';
import CategoryList from '../../videos/containers/category-list';
import SuggestionList from '../../videos/containers/suggestion-list';
import Header from '../../sections/components/header';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: <Header />,
      title: 'inicio',
      navigationOptions: {
      }
      // headerStyle: {
      //   backgroundColor: '#1A2F3B',
      // }
    }
  }
  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    })
  }
  componentWillUnmount() {
    this.focus.remove();
  }
  render() {
    return (
      <Fragment>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
        />
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    )
  }
}



function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}


export default connect(mapStateToProps)(Home);
