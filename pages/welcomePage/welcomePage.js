import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

class WelcomePage extends Component {

  render() {
    return (
        <View style={{flex:1}}>
        <View testID="welcomePage" style={styles.WholeBody}>
          <Text style={{color:'#00072d', fontSize:16}}>Welcome to DETOX-AMPLIFY</Text>
            <Text style={{color:'#00072d', fontSize:14}}>On-demand protection for your favourite things. Choose what you want to insure, when you want to insure it.</Text>
            <Button
              title="LET’S GO"
              width={279}
              pressFunc={() => Actions.home()}
            />
        </View>
        </View>

    );
  }
}


export default WelcomePage;
