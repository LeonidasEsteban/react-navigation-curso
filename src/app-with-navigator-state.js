import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  initializeListeners,
  createNavigationPropConstructor,
  createReduxBoundAddListener,
  createDidUpdateCallback
} from 'react-navigation-redux-helpers';
import AppNavigator from './app-navigator';

// const navigationPropConstructor = createNavigationPropConstructor("root");
const addListener = createReduxBoundAddListener('root');
const didUpdate = createDidUpdateCallback('root');

class AppWithNavigatorState extends Component {
  componentDidUpdate() {
    return didUpdate();
  }
  componentDidMount() {
    initializeListeners('root', this.props.navigation);
  }
  render() {
    const navigation = {
      dispatch: this.props.dispatch,
      state: this.props.navigation,
      addListener
    };

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
