import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Platform} from 'react-native';
import {theme} from '../constants';

export interface Props {
  readonly [key: string]: any;
}

export default class Input extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput autoCorrect={false} autoCapitalize="none" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.sizes.base,
  },
});
