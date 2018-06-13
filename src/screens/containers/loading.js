import React, { Component } from 'react';
import LoadingSpiner from '../../sections/components/loading';
import { connect } from 'react-redux';

class Loading extends Component {
  componentDidMount() {
    console.log(this.props.user)
    if (this.props.user) {
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Login');
    }
  }
  render() {
    return (
      <LoadingSpiner />
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Loading);
