import React from 'react';
import { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

import { LoginThunk } from '../../Thunks/LoginThunk';
import { LoginStyles } from './LoginStyle';
import { Icons } from '../../Theme/Icons';

interface Props {
  componentId: string,
  authenticate: Function,
  user: Object,
  showSpinner: boolean
}

interface State {
  email: string,
  password: string
}

class LoginScreen extends Component<Props, State> {
  static options(passProps: any) {
    return {
      topBar: {
        visible: false
      }
    }
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
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

  /**
   * @description update application state for input fields
   * @param {string} text 
   * @param {string} type 
   */
  updateStateWith(text: string, type: string) {
    let field: any = { [type]: text };
    this.setState(field);
    field = null;
  }

  onEmailLoginPressed() {

  }

  onFacebookPressed() {

  }

  onGooglePressed() {
    this.props.authenticate();
  }

  onForgotPassPressed() {

  }

  onCreateAccountPressed() {

  }

  render() {
    return (
      <React.Fragment>
        <ImageBackground source={require('../../Assets/Images/login_background.png')} style={LoginStyles.container}>
          { /*  logo part */}
          <View style={LoginStyles.logo} >
            <Text style={LoginStyles.logoText}>hoozin</Text>
          </View>

          { /* input part */}
          <View style={LoginStyles.inputForm} >
            <TextInput multiline={false}
              style={
                [LoginStyles.textInput, LoginStyles.line]
              }
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='emailAddress'
              onChangeText={(text: string) => this.updateStateWith(text, 'email')}
              value={this.state.email}
              placeholder='Email'
              placeholderTextColor={'#707070'}
              enablesReturnKeyAutomatically={true}
              returnKeyType="next"
              underlineColorAndroid='transparent'
            />
            <TextInput multiline={false}
              style={[LoginStyles.textInput, LoginStyles.line]}
              textContentType='password'
              secureTextEntry={true}
              onChangeText={(text: string) => this.updateStateWith(text, 'password')}
              value={this.state.password}
              placeholder='Password'
              placeholderTextColor={'#707070'}
              enablesReturnKeyAutomatically={true}
              returnKeyType="done"
              underlineColorAndroid='transparent'
            />
            <View style={[LoginStyles.rowItem, LoginStyles.separator]} >
              <TouchableOpacity style={[LoginStyles.rowItem]} onPress={() => this.onEmailLoginPressed()} >
                <Text style={LoginStyles.loginButton}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={LoginStyles.rowItem} >
              <Text style={LoginStyles.commonText}>or continue with</Text>
            </View>
            <View style={[LoginStyles.socialLogin, LoginStyles.rowItem]}>
              <TouchableOpacity onPress={() => this.onFacebookPressed()}>
                <Image source={Icons.fbLogin} />
              </TouchableOpacity>

              <TouchableOpacity style={LoginStyles.googleLogin}
                onPress={() => this.onGooglePressed()}>
                <Image source={Icons.gLogin} />
              </TouchableOpacity>
            </View>
          </View>

          { /* footer part */}
          <View style={LoginStyles.footer} >
            <TouchableOpacity style={LoginStyles.buttonContainer}
              onPress={() => this.onForgotPassPressed()}>
              <Text style={LoginStyles.button}>Forgot Password</Text>
            </TouchableOpacity >
            <TouchableOpacity style={LoginStyles.buttonContainer}
              onPress={() => this.onCreateAccountPressed()}>
              <Text style={LoginStyles.button}>Create Account</Text>
            </TouchableOpacity >
          </View>
        </ImageBackground>
        {this.props.showSpinner ?
          <ActivityIndicator /> : null
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    user: state.Auth.user,
    showSpinner: state.Auth.shouldShowSpinner
  }
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    authenticate: () => dispatch(LoginThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);