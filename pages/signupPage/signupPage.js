/**
 * @file: src/pages/signupPage/signupPage.js
 * @description Renders sign up page with inputs
 * @copyright: Verge Technologies 2018
 * @author Frikan Erwee frikan@verge.co.za
 */
import React, { Component } from 'react';
import { View, ImageBackground, Text, StatusBar, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';

// assets and components
import Button from '../../components/Button/Button';
import styles from './styles';
import LogoMinimalIcon from '../../components/SVGicons/LogoMinimalIcon';
import LoginTextLink from '../../components/LoginTextLink/LoginTextLink';
import { images, COLOR_SECONDARY, COLOR_TERIARY } from '../../assets/common';
import { validatePassword, validateEmail, colorByValidation } from '../../common/functions';
import ModalCard from '../../components/ModalCard/ModalCard';

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

  renderMessage =() => (
    <View style={styles.PromptContainer}>
      <Text style={styles.PromptTitle}>
        Oops
      </Text>
      <Text style={styles.PromptText}>{this.state.errorMessage}</Text>
      <View style={styles.PromptButton}>
        <Button
          title="RETRY"
          width={232}
          pressFunc={() => this.setState({ modalShow: false, trySignin: false })}
          ButtonColor={COLOR_TERIARY}
        />
      </View>
    </View>
  )


  render() {
    return (
      <ImageBackground source={images.signupScreenbackground} style={styles.BackgroundImage}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.Icon}>
          <LogoMinimalIcon iconheight={26} iconwidth={108} />
        </View>
        <View testID="signupPage" style={styles.WholeBody}>
          <ScrollView
            testID="signupSV"
            ref={(scroll) => { this.scroll = scroll; }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.TextHeader}>
              <Text style={styles.LargeText}>
              Welcome to JaSure
              </Text>
              <Text style={styles.MediumText}>
              Please sign up below
              </Text>
            </View>
            <View style={styles.Inputs}>
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
                  secureTextEntry
                  style={styles.TextInput}
                  value={this.state.password}
                  onChangeText={password => this.onPasswordChange(password)}
                  underlineColorAndroid="transparent"
                  onEndEditing={() => this.scrollDown()}
                />
              </View>
              <Text style={styles.PasswordText}>
            Minimum of 8  characters, 1 capital letter and 1 number.
              </Text>
            </View>
            <View style={styles.Termconditions}>
              <Text style={styles.TcText}>
                By creating an account you agree to our
              </Text>
              <View style={styles.Termconditions2} >
                <Text
                  testID="TermsLink"
                  style={styles.Privterm}
                  onPress={() => console.log('Terms')}
                >
                  Terms of Use
                </Text>
                <Text style={styles.TcText}> and </Text>
                <Text
                  testID="PrivacyLink"
                  style={styles.Privterm}
                  onPress={() => console.log('Privacy')}
                >Privacy Policy
                </Text>
              </View>
            </View>
            <View style={styles.ButtonContainer}>
              <Button
                title="CONTINUE"
                ButtonDisable={!this.state.validEmail && !this.state.validPassword}
                width={279}
                pressFunc={() => this.signup()}
                isloading={this.state.trySignup}
              />
              <LoginTextLink fontColor="#0E225B" />
            </View>
            <View style={styles.Bumper} />
          </ScrollView>
        </View>
        { this.state.modalShow &&
        <ModalCard
          CardHeight={200}
        >
          {this.renderMessage()}
        </ModalCard>
        }
      </ImageBackground>

    );
  }
}


export default SignUpPage;
