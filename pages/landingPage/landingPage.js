import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';


class LandingPage extends Component {

  render() {
    return (
          <View style={{justifyContent:'center', alignItems: 'center'}}>
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
