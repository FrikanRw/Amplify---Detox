/**
 * @file: src/pages/emailPage/emailPage.js
 * @description Renders email confirmation page
 * @copyright: Verge Technologies 2018
 * @author Frikan Erwee frikan@verge.co.za
 */
import React, { Component } from 'react';
import { View, ImageBackground, Text, StatusBar, Platform, NativeModules, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';

import SplashScreen from 'react-native-splash-screen';
import Button from '../../components/Button/Button';
// assets and components

import styles from './styles';
import { images } from '../../assets/common';
import LogoMinimalIcon from '../../components/SVGicons/LogoMinimalIcon';

class EmailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedEmail: false,
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }

  openMailApp=() => {
    setTimeout(() => {
      this.setState({ openedEmail: true });
    }, 2000);
    if (Platform.OS === 'android') {
      // Custom android module to launch mail client
      NativeModules.UIMailLauncher.launchMailApp();
      return;
    }
    // iOS
    Linking.openURL('message:0');
  }

  checkConfirmation = () => {
    Auth.signIn(this.props.username, this.props.password)
      .then(() => Actions.welcome())
      .catch(err => console.log('Error', err));
  }

  render() {
    return (
      <ImageBackground source={images.signupScreenbackground} style={styles.BackgroundImage}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <View style={styles.Icon}>
          <LogoMinimalIcon iconheight={26} iconwidth={108} />
        </View>
        <View testID="emailPage"style={styles.WholeBody}>
          <View style={styles.TextHeader}>
            <Text style={styles.LargeText}>Email Verification</Text>
            <Text style={styles.MediumText}>We have sent an email to:</Text>
            <Text style={[styles.MediumText, styles.BoldMediumText]}>
              {this.props.username}
            </Text>
            <Text style={[styles.MediumText, styles.InfoText]}>Tap on the link in your email to confirm your email address</Text>
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              BtestID="openEmail"
              title="OPEN EMAIL APP"
              width={279}
              pressFunc={() => this.openMailApp()}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              BtestID="checkverifyEmail"
              title="I HAVE VERIFIED MY EMAIL"
              width={279}
              pressFunc={() => this.checkConfirmation()}
              ButtonDisable={!this.state.openedEmail}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              title="RESEND CONFIRMATION"
              BtestID="resendEmail"
              width={279}
              pressFunc={() => Auth.resendSignUp(this.props.username)}
              ButtonDisable={!this.state.openedEmail}
            />
          </View>
        </View>
      </ImageBackground>

    );
  }
}


export default EmailPage;
