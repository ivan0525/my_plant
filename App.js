import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigators from './navigators';
export default class App extends Component {
  render() {
    return <Navigators />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
