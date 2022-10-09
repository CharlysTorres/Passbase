import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { RecoveryPassword } from '../screens/RecoveryPassword';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName='SignIn'
  >

    <Stack.Screen 
      name="SignIn"
      component={SignIn}
    />

    <Stack.Screen 
      name="SignUp"
      component={SignUp}
    />

    <Stack.Screen
      name="RecoveryPassword"
      component={RecoveryPassword}
    />
  </Stack.Navigator>
);

export default AuthRoutes;