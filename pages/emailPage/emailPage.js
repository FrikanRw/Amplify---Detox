import React, { Component } from 'react';
import { View, Text, Platform, NativeModules, Linking , Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify';
import styles from '../styles';
// assets and components

class EmailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedEmail: false,
    };
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
      <View testID="emailPage" style={{flex:1, margin:24 ,justifyContent:'center', alignItems: 'center', marginTop:150}}>
          <View style={styles.TextHeader}>
            <Text style={styles.LargeText}>Email Verification</Text>
            <Text style={styles.MediumText}>We have sent an email to:</Text>
            <Text style={[styles.MediumText, styles.BoldMediumText]}>
              {this.props.username}
            </Text>
            <Text style={[styles.MediumText, styles.InfoText]}>Tap on the link in your email to confirm your email address...</Text>
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              testID="openEmail"
              title="OPEN EMAIL APP"
              onPress={() => this.openMailApp()}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              testID="checkverifyEmail"
              title="I HAVE VERIFIED MY EMAIL"
              onPress={() => this.checkConfirmation()}
              disabled={!this.state.openedEmail}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              title="RESEND CONFIRMATION"
              testID="resendEmail"
              onPress={() => Auth.resendSignUp(this.props.username)}
              disabled={!this.state.openedEmail}
            />
          </View>
        </View>
    );
  }
}


export default EmailPage;
