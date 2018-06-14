import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';

// assets and components
import { validateEmail, validatePassword, colorByValidation } from '../../assests/common';
import styles from '../styles';

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      family_name: '',
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
      trySignup: false,
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
        email: emailInput,
      });
    }

/**
* Handles validation on input, line goes green on valid password
*/
   onPasswordChange = (passwordInput) => {
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
/**
 * Fires on sign up
 */
  signup= async () => {
    this.setState({ trySignup: true });
    const username = this.state.email;
    const { email } = this.state;
    const { password } = this.state;
    const { name } = this.state;
    const { family_name } = this.state;

    await Auth.signUp({
      username,
      password,
      attributes: {
        name,
        family_name,
        email,
      },
    })
      .then(() => {
        Actions.email({ username, password });
      })
      .catch(err => this.setState({
        modalShow: true,
        errorMessage: err.message,
        trySignup: false,
      }));
  }

  scrollDown =() => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  }

  render() {
    return (
        <View testID="signUpPage" style={{flex:1, margin:24 ,justifyContent:'center', alignItems: 'center', marginTop:150}}>
          <ScrollView
            ref={(scroll) => { this.scroll = scroll; }}
            showsVerticalScrollIndicator={false}
          >
              <Text style={{color:'#00072d', fontSize:16}}>
              Welcome new user,
              </Text>
              <Text style={{color:'#00072d', fontSize:14}}>
              Please sign up below
              </Text>
            <View style={{marginTop :50}}>
              <View style={styles.TextInputContainer}>
                <TextInput
                  testID="name"
                  placeholder="Name"
                  style={styles.TextInput}
                  value={this.state.name}
                  onChangeText={name => this.setState({ name })}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.TextInputContainer}>
                <TextInput
                  testID="surname"
                  placeholder="Surname"
                  style={styles.TextInput}
                  value={this.state.family_name}
                  onChangeText={family_name => this.setState({ family_name })}
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.TextInputContainer}>
                <TextInput
                  testID="email"
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
                  testID="password"
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
              <Text style={{color:'#00072d', fontSize:14}}>
                Minimum of 8  characters, 1 capital letter and 1 number.
              </Text>
            </View>
            <View style={styles.ButtonContainer}>
              <Button
                title="CONTINUE"
                disabled={!this.state.validEmail && !this.state.validPassword}
                onPress={() => this.signup()}
              />
            </View>
            <View style={styles.Bumper} />
          </ScrollView>
        </View>
    );
  }
}


export default SignUpPage;
