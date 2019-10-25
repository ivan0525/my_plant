import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import {Button} from './../components';
import {theme} from '../constants';
export interface Props {
  readonly [key: string]: any;
}

export default class SignUp extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>SignUp</Text>
          <View style={styles.content}>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button gradient>
              <Text>SignUp</Text>
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
    fontSize: theme.sizes.h1,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingTop: theme.sizes.padding * 2.5,
  },
});
