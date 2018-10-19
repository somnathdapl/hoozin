import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';

export default class EventMapScreen extends Component {
  static options(passProps: any) {
    return {
      topBar: {
        visible: true,
        drawBehind: true,
        backButton: {
          visible: false
        },
      }
    }
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', height: 150, backgroundColor: 'teal' }}>
        
      </View>
    )
  }
}
