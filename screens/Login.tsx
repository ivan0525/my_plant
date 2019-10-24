import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {Button} from '../components';
import {theme} from '../constants';

export interface Props {
  [key: string]: any;
}

export default class Login extends Component<Props> {
  constructor(props: Props) {
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
    const {navigation} = this.props;
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.content}>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button gradient onPress={() => navigation.navigate('Login')}>
              <Text style={{color: 'white', fontSize: 16}}>Login</Text>
            </Button>
            <Button>
              <Text>Forget your password?</Text>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.sizes.base * 2,
    paddingVertical: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingTop: theme.sizes.base * 2.5,
  },
});
