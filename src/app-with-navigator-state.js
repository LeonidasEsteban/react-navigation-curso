import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  initializeListeners,
  createNavigationPropConstructor
} from 'react-navigation-redux-helpers';
import AppNavigator from './app-navigator';

const navigationPropConstructor = createNavigationPropConstructor("root");

class AppWithNavigatorState extends Component {
  componentDidMount() {
    initializeListeners('root', this.props.navigation);
  }
  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.navigation
    );

    return (
      <AppNavigator
        navigation={navigation}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(AppWithNavigatorState);
