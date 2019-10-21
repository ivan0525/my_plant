import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
  }
  handleAlert() {
    Alert.alert('Alert title', 'my alert', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
    ]);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button onPress={() => Alert.alert()} title="Test Alert" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
