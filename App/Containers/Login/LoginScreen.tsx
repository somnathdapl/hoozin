import React from 'react';
import {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';

import { LoginThunk } from '../../Thunks/LoginThunk';

interface Props {
  componentId: string,
  authenticate: Function,
  user: Object
}

class LoginScreen extends Component<Props> {
  static options(passProps: any) {
    return {
      topBar: {
        visible: false
      }
    }
  }

  constructor(props: Props) {
    super(props);
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    console.log("@@prev props", prevProps.user);
    console.log("@@prev state", prevState);
    console.log("@@current props", this.props.user);
  }

  doSomething() {
    //this.props.authenticate();
    Navigation.push(this.props.componentId, {
      component: {
        name: 'hoozin.EventMap'
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 150, backgroundColor: 'crimson' }}>
        <TouchableOpacity onPress={() => this.doSomething()}>
          <Text>Click Me</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.Auth.user
  }
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    authenticate: () => dispatch(LoginThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);