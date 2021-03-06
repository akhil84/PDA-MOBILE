/**
 * pda
 * PrivacyView.js
 * @author Socion Advisors LLP
 * @description Created on 09/10/2019
 * Copyright © 2019 pda. All rights reserved.
 */
import React, { Component } from 'react';
import {View,Platform} from 'react-native';
import { WebView } from 'react-native-webview';
import { COLORS } from '../../../constants/Color';
import Spinner from 'react-native-spinkit';
import ButtonWithIcon from '../../common/ButtonWithIcon';
import { verticalScale } from '../../../theme/pdaStyleSheet';
import { Actions } from 'react-native-router-flux';
import Toolbar from '../../common/Toolbar';
import { stringsConvertor } from '../../../utils/I18n';
import NotificationBell from '../../../container/common/NotificationBell';
export default class PrivacyView extends Component {
  constructor(){
    super();
    this.renderLoading = this.renderLoading.bind(this);
  }
  renderLoading(){
    return(
      <View style={{flex: 1, alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white}}>
        <Spinner
          color={COLORS.sessionButton}
          type="ChasingDots"
          size={50}
        />
      </View>
    );
  }
  onPressBack(){
    Actions.pop();
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Toolbar isBack={true} title={stringsConvertor('screenTitle.privacyPolicy')}
          rightRender={
            <NotificationBell color={COLORS.white} />
          }
        />
        <WebView source={{ uri: '' }}
          renderLoading={this.renderLoading}
          startInLoadingState
          style={{flex:1,opacity: 0.99}}
        />
      </View>
    );
  }
}