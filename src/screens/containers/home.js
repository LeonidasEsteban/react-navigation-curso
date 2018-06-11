import React, { Component, Fragment } from 'react';
import {
  SafeAreaView
} from 'react-native';
import { connect } from 'react-redux';

import API from '../../../utils/api';
import Search from '../../sections/containers/search';
import CategoryList from '../../videos/containers/category-list';
import SuggestionList from '../../videos/containers/suggestion-list';
import Header from '../../sections/components/header';

class Home extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    console.log('Esta es la lista de categorías')
    console.table(categoryList);
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
  }
  render() {
    return (
      <Fragment>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    )
  }
}

Home.navigationOptions = ({ navigation }) => {
  return {
    header: <Header />,
    // headerStyle: {
    //   backgroundColor: '#1A2F3B',
    // }
  }
};

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}


export default connect(mapStateToProps)(Home);
