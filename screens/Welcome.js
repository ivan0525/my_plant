import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
export default class Welcome extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Go to Login"
        />
        <Button
          title="change title"
          onPress={() => navigation.setParams({otherParam: 'Welcome'})}
        />
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
