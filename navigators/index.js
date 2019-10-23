import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native';
import Welcome from './../screens/Welcome';
import Login from './../screens/Login';

const AppNavigator = createStackNavigator(
  {
    Welcome,
    Login,
  },
  {
    // initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
      },
      headerBackImage: <Image source={require('./../assets/icons/back.png')} />,
    },
  },
);

export default createAppContainer(AppNavigator);
