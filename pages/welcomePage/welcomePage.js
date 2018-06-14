import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify';

class WelcomePage extends Component {
 
  componentDidMount(){
    const session = Auth.currentSession();
    console.log(session);}

  render() {
    return (
      <View testID="welcomePage" style={{flex:1, margin:24 ,justifyContent:'center', alignItems: 'center', marginTop:100}}>
          <Text style={{color:'#00072d', fontSize:16}}>Welcome to DETOX-AMPLIFY</Text>
            <Text style={{color:'#00072d', fontSize:14}}>Hope this helps you get into testing.</Text>
        </View>
    );
  }
}


export default WelcomePage;
