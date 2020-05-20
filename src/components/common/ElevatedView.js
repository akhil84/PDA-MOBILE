/**
 * pda
 * ElevatedView.js
 * @author Socion Advisors LLP
 * @description Created on 27/02/2019
 * Copyright © 2019 pda. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';

export default class ElevatedView extends React.Component {
  static propTypes = {
    elevation: PropTypes.number,
    style: PropTypes.object || PropTypes.array,
    children : PropTypes.any.isRequired
  };
  static defaultProps = {
    elevation: 0,
    style: {}
  };

  render() {
    const { elevation, style, ...otherProps } = this.props;

    if (Platform.OS === 'android') {
      return (
        <View elevation={elevation} style={[{ elevation}, style ]} {...otherProps}>
          {this.props.children}
        </View>
      );
    }

    if (elevation === 0) {
      return (
        <View style={style} {...otherProps}>
          {this.props.children}
        </View>
      );
    }

    //calculate iosShadows here
    const iosShadowElevation = {
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        height: 0.6 * elevation
      }
    };

    return (
      <View style={[iosShadowElevation, style]} {...otherProps}>
        {this.props.children}
      </View>
    );
  }
}