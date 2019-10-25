import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Image} from 'react-native';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const AppNavigator = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerBackImage: () => (
        <Image source={require('./../assets/icons/back.png')} />
      ),
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
      },
    },
  },
);

export default createAppContainer(AppNavigator);
