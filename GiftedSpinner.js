'use strict'

import React, { Component, PropTypes } from 'react';
import { View, ProgressBarAndroid, Platform, ActivityIndicator } from 'react-native';

export default class GiftedSpinner extends Component {
  _getSpinner = () => {
    return (
      <ActivityIndicator
        animating={true}
        size="small"
        {...this.props}
      />
    );
  }

  render() {
    return (
      <View>
        {this._getSpinner()}
      </View>
    );
  }
}
