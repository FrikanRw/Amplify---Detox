import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


class LandingPage extends Component {

  render() {
    return (
          <View
            testID="landingPage" 
            style={{flex :1 ,justifyContent:'center', alignItems: 'center'}}>
              <Text style={{color:'#00072d', fontSize:16}}>
                Welcome to Testing with Detox
              </Text>
          <Button
            onPress={()=>Actions.signup()}
            title="SIGN UP"
            color="#064789"
          />
          <Button
           onPress={()=>Actions.signin()}
            title="SIGN IN"
            color="#4286f4"
          />
          </View>
    );
  }
}


export default LandingPage;
