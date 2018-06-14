import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  initializeListeners,
  createNavigationPropConstructor,
  createReduxBoundAddListener,
  createDidUpdateCallback
} from 'react-navigation-redux-helpers';
import AppNavigator from './app-navigator';
import {
  BackHandler
} from 'react-native';
import { NavigationActions } from 'react-navigation';

// const navigationPropConstructor = createNavigationPropConstructor("root");
const addListener = createReduxBoundAddListener('root');
const didUpdate = createDidUpdateCallback('root');

class AppWithNavigatorState extends Component {
  componentDidUpdate() {
    return didUpdate();
  }
  componentDidMount() {
    initializeListeners('root', this.props.navigation);
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch } = this.props;
    dispatch(
      NavigationActions.back({
        key: null
      })
    );

    return true;
  }
  render() {
    const navigation = {
      dispatch: this.props.dispatch,
      state: this.props.nav,
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
    nav: state.navigation
  }
}

export default connect(mapStateToProps)(AppWithNavigatorState);
