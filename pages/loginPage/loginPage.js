import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';

// common
import { validateEmail, validatePassword, colorByValidation } from '../../assests/common';
import styles from '../styles';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validEmail: false,
      validPassword: '',
      trySignin: false,
      modalShow: false,
    };
  }

  /**
     * Handles validation on input, button enables on valid email
     */
    onEmailChange = (emailInput) => {
      const isEmailValid = validateEmail(emailInput);
      this.setState({
        validEmail: isEmailValid,
        username: emailInput,
      });
    }

  /**
    * Handles validation on input, line goes green on valid password, red on bad password
    */
  onPasswordChange =  (passwordInput) => {
      if (passwordInput !== '') {
        const isPasswordValid = validatePassword(passwordInput);
        this.setState({
          validPassword: isPasswordValid ? 'GOOD' : 'BAD',
          password: passwordInput,
        });
      } else {
         this.setState({
          validPassword: '',
          password: passwordInput,
        });
      }
  }
 // Fires the login
  login = () => {
    this.setState({ trySignin: true });
    Auth.signIn(this.state.username, this.state.password)
      .then((user) => {
        Actions.welcome({ user });
      })
      .catch(err => console.log(err))
  }
  //scroll function to pull down Scrollview after input
  scrollDown =() => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  }

  render() {
    return (
      <View testID="signInpage" style={{flex:1, margin:24 ,justifyContent:'center', alignItems: 'center', marginTop:150}}>
      <ScrollView
            ref={(scroll) => { this.scroll = scroll; }}
            showsVerticalScrollIndicator={false}>
          <Text style={{color:'#00072d', fontSize:16}}>Welcome Back</Text>
          <Text style={{color:'#00072d', fontSize:14}}>Please sign in below</Text>
              <View style={styles.TextInputContainer}>
                <TextInput
                  testID="email-login"
                  placeholder="Email address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.TextInput}
                  value={this.state.username}
                  onChangeText={username => this.onEmailChange(username)}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={[styles.TextInputContainer,
              { borderBottomColor: colorByValidation(this.state.validPassword) }]}
              >
                <TextInput
                  testID="password-login"
                  placeholder="Password"
                  autoCapitalize="none"
                  secureTextEntry
                  style={styles.TextInput}
                  value={this.state.password}
                  onChangeText={password => this.onPasswordChange(password)}
                  underlineColorAndroid="transparent"
                  onEndEditing={() => this.scrollDown()}
                />
              </View>
            <View style={styles.ButtonContainer}>
              <Button
                onPress={() => this.login()}
                disabled={!this.state.validEmail}
                title="SIGN IN"
                color="#064789"
                testID="sign_in_button"
              />
            </View>
            <View style={styles.Bumper} />
          </ScrollView>
       </View>
    );
  }
}


export default LoginPage;
